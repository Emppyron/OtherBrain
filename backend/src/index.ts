import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, linkModel, tagModel, userModel } from "./db";
import { JWT_SECRET } from "./secret-config";
import { userAuthMiddleware } from "./middlewares";
import { RandomHashForShare } from "./utils";
import cors from "cors";
import { generateEmbedding } from "./generate-embeddings";
import { getTopResults } from "./compare-embeddings";

const app= express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    try{
      await userModel.create({
         username,password
       });
    }
    catch(e){
        res.json({
            msg:"username already exists"
        })
    }
    
    res.status(411).json({
        msg : "You are signed up"
    });

})
app.post("/api/v1/signin",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const foundUser=await userModel.findOne({
         username:username,
         password:password
    })

    if(!foundUser){
        res.status(403).json({
            msg:"Incorrect Credentials"
        });
        return;
    }
     
    const token=jwt.sign({
        id: foundUser._id
    },JWT_SECRET);

    res.json({
        token:token
    });  
    
})
app.post("/api/v1/content",userAuthMiddleware,async (req,res)=>{
     const title=req.body.title;
     const link=req.body.link;
     const type=req.body.type;
     const description=req.body.description;
     //const tags=req.body.tags;
     //@ts-ignore
     const UserId=req.userId;

    
     //tags array handling 
     // if new tag , then add that in tag database, or else 
     // leave it as it is coz 
     // tags would be required for vector embeddings in future 

    //  for(let i=0;i<tags.length;i++){
    //     const foundTag=await tagModel.findOne({title : tags[i]});
    //     if(!foundTag){
    //         await tagModel.create({
    //             title:tags[i]
    //         })
    //     }
    //     const forsureTag=await tagModel.findOne({title:tags[i]});
    //     //@ts-ignore
    //     //@ts-ignore
    //     tags[i]=forsureTag._id;
       
    //     //@ts-ignore
    //  }
    
    let embed:number[]=[];
    
    try{
    embed= await generateEmbedding(`${title} ${description}`); 
    }
    catch(e){
        console.log("embeddings not generated for this content error ");
    }

     const rez=await contentModel.create({
        title : title,
        link : link,
        type : type,
        description:description,
        userId:UserId,
        embedding:embed
     });
     
     res.json({
        msg:"content is added",
     });

})
app.get("/api/v1/content",userAuthMiddleware,async (req,res)=>{
    //@ts-ignore 
    const userId=req.userId;
     const content=await contentModel.find({
        userId
     }).populate("userId","username");
     res.json({
        content
     })

    
})
app.delete("/api/v1/content",userAuthMiddleware,async (req,res)=>{
    
    const contentId=req.body.contentId;
    console.log("indeltee");
    console.log(contentId);
    //@ts-ignore
    const userId=req.userId;
    console.log(userId);
    await contentModel.deleteMany({
        _id : contentId,
        userId: userId
    })
     
    res.json({
        msg:"deleted"
    });
})
app.post("/api/v1/brain/share",userAuthMiddleware,async (req,res)=>{

    const share =((req.body.share)=="true");
    //@ts-ignore
    const userId=req.userId;
    const hash=RandomHashForShare(10);
    if(share){
      const link=await linkModel.findOne({userId}); 
      try{
        await linkModel.create({
           hash:hash,
           userId:userId
        });

       }
       catch(e){
        res.json({
            msg:"user already enabled share",
            Link:link?.hash,
            error:e
        });return;
       }
        
    }
    else{
      await linkModel.deleteOne({
          userId:userId
      });
    }
    res.json({
        msg:"share details updated",
        Link:hash
    });

})
app.get("/api/v1/brain/share/info",userAuthMiddleware,async (req,res)=>{

     //@ts-ignore
     const userId=req.userId;
    
    
     const link=await linkModel.findOne({userId}); 
     if(!link){
        res.json({
         "created":false  
        });
     } 
     else{
       res.json({
           "created":true,
           "link":link.hash 
       })
     }

})
app.get("/api/v1/brain/:shareLink",async(req,res)=>{
   const hashLink=req.params.shareLink;
   const link=await linkModel.findOne({hash:hashLink});
   console.log("link");
   console.log(link);
   if(!link){
      res.json({
        msg:"link not valid , ideally non ocuuring case in test"
      });return;
   }
   const content=await contentModel.find({userId:link.userId});
   const user=await userModel.findOne({_id:link.userId});
   
   if(!user){
      res.json({
        msg:"user not found !! code fatt gaya bc"
      })
   }
   else{
      res.json({
        user:user.username,
        content:content
      });
   }

})
app.get('/api/v1/query',userAuthMiddleware,async (req,res)=>{
  
   try{ 
    const query=req.body.query;
    //@ts-ignore
    const userId=req.userId;
    const allContents=await contentModel.find({
        userId:userId
    });
    const queryEmbedding=await generateEmbedding(query);
    const results=getTopResults(queryEmbedding,allContents);

    res.json({
        results
    });
  }
  catch(e){
    res.json({
        results : "unknown error occured in search",
    });
  }

})



app.listen(3000);
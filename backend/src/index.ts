import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, tagModel, userModel } from "./db";
import { JWT_SECRET } from "./secret-config";
import { userAuthMiddleware } from "./middlewares";

const app= express();
app.use(express.json());

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
     const tags=req.body.tags;
     //@ts-ignore
     const UserId=req.userId;
      
     //tags array handling 
     // if new tag , then add that in tag database, or else 
     // leave it as it is coz 
     // tags would be required for vector embeddings in future 

     for(let i=0;i<tags.length;i++){
        const foundTag=await tagModel.findOne({title : tags[i]});
        console.log("this is the found tag value ");
        console.log(foundTag);
        if(!foundTag){
            console.log("entered here with "+tags[i]);
            await tagModel.create({
                title:tags[i]
            })
        }
        const forsureTag=await tagModel.findOne({title:tags[i]});
        //@ts-ignore
        //@ts-ignore
        tags[i]=forsureTag._id;
        console.log("tag number "+ i);
        //@ts-ignore
        console.log(forsureTag.title);
        console.log(tags[i]);
     }
    

     await contentModel.create({
        title : title,
        link : link,
        tags: tags,
        userId:UserId
     })
     
     res.json({
        msg:"content is added"
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
    //@ts-ignore
    const userId=req.userId;
    await contentModel.deleteMany({
        _id : contentId,
        userId: userId
    })
     
    res.json({
        msg:"deleted"
    });
})
app.post("/api/v1/brain/share",(req,res)=>{

})
app.get("/api/v1/brain/:shareLink",(req,res)=>{

})

app.listen(3000);
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, userModel } from "./db";
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
     const UserId=req.id;
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
app.get("/api/v1/content",(req,res)=>{
    
})
app.delete("/api/v1/content",(req,res)=>{
    
})
app.post("/api/v1/brain/share",(req,res)=>{

})
app.get("/api/v1/brain/:shareLink",(req,res)=>{

})

app.listen(3000);
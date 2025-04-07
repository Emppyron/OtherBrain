import { NextFunction , Request, Response} from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./secret-config";


export const userAuthMiddleware=(req: Request,res:Response,next:NextFunction)=>{
     const token=req.headers.token;
     const decoded=jwt.verify(token as string,JWT_SECRET);
     if(!decoded){
        res.json({
            msg:"why play with tokens bro"
        });return;
     }
     //@ts-ignore
     req.userId=decoded.id;
     next(); 
}
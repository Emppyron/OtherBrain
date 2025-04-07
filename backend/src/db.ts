import {model, Schema} from "mongoose";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guessmyname4444:YOwY850jNnIDHPKW@cluster0.j4qfz.mongodb.net/brainly")


const UserSchema=new Schema({
    username:{type:String, unique:true},
    password:String
});

const ContentSchema=new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId, ref:"tags"}],
    userId:{type:mongoose.Types.ObjectId,ref:"users", required:true}
})

const TagSchema=new Schema({
    title:String
})


export const userModel=model("users",UserSchema);
export const contentModel=model("contents",ContentSchema);
export const tagModel=model("tags",TagSchema);
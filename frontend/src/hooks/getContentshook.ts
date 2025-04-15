import React,{ useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useContent=()=>{
    const [data,setData]=useState<any[]>([]);
    
    useEffect(()=>{
        console.log("inside useeffecrf")
        console.log(data);
        axios.get(BACKEND_URL+"/api/v1/content",{
            headers:{
                "token": localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log("after then call");
            console.log(res.data.content);
            setData(res.data.content);
        })
        .catch((err) => {
            console.error("API error:", err);
          });
    },[])
    //@ts-ignore
    console.log(data);
    return data;
}


import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useContent=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get(BACKEND_URL+"/api/v1/content",{
            headers:{
                "token": localStorage.getItem("token")
            }
        }).then((res)=>{
            setData(res.data);
        })
    },[])
    return data;
}


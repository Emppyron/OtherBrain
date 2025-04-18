import { useRef, useState } from "react";
import { Button } from "./button";
import axios from "axios";
import { BACKEND_SHARE_URL, BACKEND_URL } from "../config";
import { CrossIcon } from "./Icons/crossIcon";

export const ShareBrain=({sbClose}:{
    sbClose:()=>void
})=>{

    const [enable, setEnable]=useState(true);
    //@ts-ignore
    const shareLinkRef=useRef<any>();
    
    async function getShareLink(){
        const response=await axios.post(BACKEND_URL+"/api/v1/brain/share",{
            share:"true"
        },{
            headers:{
                "token":localStorage.getItem("token")
            }
        })
        shareLinkRef.current=BACKEND_SHARE_URL+response.data.Link;
        setEnable(false);
    }
    async function disableShareLink(){
        const response=await axios.post(BACKEND_URL+"/api/v1/brain/share",{
            share:"false"
        },{
            headers:{
                "token":localStorage.getItem("token")
            }
        })
        shareLinkRef.current="";
        setEnable(true);
    }


    return ( <div className="h-screen w-screen bg-gray-400 opacity-80  fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center m-4">
                    
                    <div className="bg-white flex flex-col rounded-xl p-4">
                            <div className="flex justify-end" onClick={()=>{sbClose()}}>
                              <CrossIcon size="md"/>
                            </div>
                           <div className="flex flex-col items-center"> 
                           here is the share link !
                           {enable && <Button text="enable Share" size="md" variant={"primary"} onClick={getShareLink}/>}
                           {!enable && <div>{shareLinkRef.current}</div>}
                           {!enable && <Button text="disable Share" size="md" variant={"primary"} onClick={disableShareLink}/> }
                           </div>
                    </div> 
                </div>          
      </div>);
}
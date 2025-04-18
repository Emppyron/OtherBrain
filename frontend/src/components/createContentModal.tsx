import { useRef, useState } from "react";
import { CrossIcon } from "./Icons/crossIcon";
import { Button } from "./button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export  function CreateContentModal({open,onClose}:{open : boolean,
    onClose : ()=>void
}){
   enum typeThing{
      Youtube="youtube",
      Twitter="twitter"
   } 

    const [type,useType]=useState(typeThing.Youtube);
   //@ts-ignore
   const titleRef=useRef<HTMLInputElement>();
   //@ts-ignore
   const linkRef=useRef<HTMLInputElement>();
   //@ts-ignore
   const descriptionRef=useRef<HTMLInputElement>();
   //@ts-ignore
   const typeRef=useRef<HTMLInputElement>();
   const navigate=useNavigate();

   async function AddContentCard(){
      const title=titleRef.current.value;
      const link=linkRef.current.value;
      const description=descriptionRef.current.value;
      
      await axios.post(BACKEND_URL+"/api/v1/content",{
          title,link,description,"type" : type
      },{
        headers:{
           "token":localStorage.getItem("token") 
        }
      });
      
      alert("Content Added Successfully");
      onClose();
      navigate("/dashboard");
   }


  return (open && <div className="h-screen w-screen bg-gray-400 opacity-80  fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center m-4">
                <div className="bg-white">
                       <div onClick={onClose}>
                        <CrossIcon size="lg"/>
                        </div>
                        <div className="gap-4 flex flex-col">
                            <input ref={titleRef} type="text" className="border-gray-400 rounded-md" placeholder="Title"></input>
                            <input ref={linkRef} type="text" className="border-gray-400 rounded-md" placeholder="Link"></input>
                            <input ref={descriptionRef} type="text" className="border-gray-400 rounded-md" placeholder="Description"></input>
                            <div>
                                <Button variant={(type=="youtube")?"primary":"secondary"} text={"Youtube"} size="sm" onClick={()=>{useType(typeThing.Youtube)}}/>
                                <Button variant={(type=="twitter")?"primary":"secondary"} text={"Twitter"} size="sm" onClick={()=>{useType(typeThing.Twitter)}}/>   
                            </div>
                        </div>
                </div>
                <div className="p-2 bg-white">
                 <Button variant="primary" size="md" text="Submit" onClick={AddContentCard}></Button>
                </div> 
            </div>          
  </div>);

}


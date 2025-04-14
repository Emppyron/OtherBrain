import { Input } from "../components/input ";
import {Button} from "../components/button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
   //@ts-ignore
    const uRef= useRef<HTMLInputElement>();
  //@ts-ignore
    const pRef= useRef<HTMLInputElement>();
    const navigate=useNavigate();

    async function backendSignup(){
       const username=uRef.current.value;
       const password=pRef.current.value;

       await axios.post(BACKEND_URL+"/api/v1/signup",{
          username,password
       });
       
       alert("You are Signed Up");
       navigate("/signin");

    }

function backendSigninPath(){
    navigate("/signin");
}    

   
    return (
        <div className="h-screen w-screen bg-gray-400 opacity-80  fixed top-0 left-0 flex justify-center">
                    <div className="flex flex-col justify-center m-4 ">
                      <div className=" bg-white m-4 rounded-2xl items-center flex flex-col">    
                        <Input text="username" reference={uRef}/>
                        <Input text="password" reference={pRef} />
                        <Button variant="primary" size="md" text="Signup" onClick={backendSignup}/>
                        <Button variant="secondary" size="md" text="Signin" onClick={backendSigninPath}/>
                       </div>
                    </div>          
          </div>
    );
}
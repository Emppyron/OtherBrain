
import React, { ReactElement } from "react";

export interface ButtonProps{
   variant :"primary"|"secondary";
   size: "sm" | "md" | "lg";
   startIcon?: ReactElement;
   text : string;
   endIcon?: ReactElement;
   onClick : ()=>void;
}

const Variants={
  "primary" : "bg-indigo-600 text-black",
  "secondary" : "bg-indigo-300 text-indigo-700"
}

export const Button= (props : ButtonProps)=>{
  
               
  return (<button className={Variants[props.variant]}>{props.variant}</button>);

}

<Button  variant="primary"  text="asd" size="md" onClick={()=>{}} >
</Button>
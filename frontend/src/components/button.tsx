
import React, { ReactElement } from "react";

export interface ButtonProps{
   variant :"primary"|"secondary";
   size: "sm" | "md" | "lg";
   startIcon?: ReactElement;
   text : string;
   endIcon?: ReactElement;
   onClick ?: ()=>void;
}

const Variants={
  "primary" : "bg-indigo-600 text-white",
  "secondary" : "bg-indigo-300 text-indigo-700"
}
const sizeStyles={
  "sm" : "p-2",
  "md" : "p-4",
  "lg" : "p-6"
}

const defaultStyles="rounded-md flex";

export const Button= (props : ButtonProps)=>{
  
               
  return (  
  <button className={`${Variants[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} onClick={props.onClick}>
    {props.startIcon? <div className="pr-2">{props.startIcon}</div> : null}
    {props.text}
    </button>);

}

import { Button } from "./button";

export interface InputProps{
    text:string,
    reference?: any,

}

export const Input=(props: InputProps)=>{
    return (
       
        <div className="bg-white p-3 rounded-2xl">
                                    <input type="text" className="border-gray-400 rounded-md" placeholder={props.text} ref={props.reference}></input>
                        </div>

    );
}
import { CrossIcon } from "./Icons/crossIcon";
import { Button } from "./button";

export  function CreateContentModal({open,onClose}:{open : boolean,
    onClose : ()=>void
}){

  return (open && <div className="h-screen w-screen bg-gray-400 opacity-80  fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center m-4">
                <div className="bg-white">
                       <div onClick={onClose}>
                        <CrossIcon size="lg"/>
                        </div>
                        <div className="gap-4 flex flex-col">
                            <input type="text" className="border-gray-400 rounded-md" placeholder="Title"></input>
                            <input type="text" className="border-gray-400 rounded-md" placeholder="Link"></input>
                            <input type="text" className="border-gray-400 rounded-md" placeholder="Description"></input>
                            <input type="text" className="border-gray-400 rounded-md" placeholder="type- Youtube or Twiter"></input>
                        </div>
                </div>
                <div className="p-2 bg-white">
                 <Button variant="primary" size="md" text="Submit" onClick={()=>{}}></Button>
                </div> 
            </div>          
  </div>);

}
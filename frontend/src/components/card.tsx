import { ShareIcon } from "./Icons/shareIcon";
import { YoutubeIcon } from "./Icons/youtubeIcon";
import { DeleteIcon } from "./Icons/deleteIcon";

export const Card=()=>{
    
    return (<div className="border-gray-200 border-2 max-w-60">
       <div className="flex justify-between   ">
            <div className="flex gap-2 items-center">
               <YoutubeIcon size="xl"/>
               <div>Project</div>
            </div>
            <div className="flex gap-2 items-center">
                 <ShareIcon size="lg"/>
                 <DeleteIcon size="lg"/>

            </div>

       </div>
       <div>


       </div>

    </div>);


} 
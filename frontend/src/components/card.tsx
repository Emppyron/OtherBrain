import { ShareIcon } from "./Icons/shareIcon";
import { YoutubeIcon } from "./Icons/youtubeIcon";
import { DeleteIcon } from "./Icons/deleteIcon";
import { Tweet } from "react-tweet";
import { extractTweetId } from "../functions/tweetId";
import { extractYouTubeID } from "../functions/youtubeId";

export interface CardProps{
   type:"youtube"|"twitter";
   link: string;
   description:string;
   title:string;
}



export const Card=(props:CardProps)=>{
   
   function extractTweetId(url : String) {
      const match = url.match(/status\/(\d+)/);
      return match ? match[1] : undefined;
    }

    let LinkId : string|undefined="";
    if(props.type=="twitter"){
       LinkId=extractTweetId(props.link);
    }
    if(props.type=="youtube"){
       LinkId=extractYouTubeID(props.link);
    }

   
    return (<div className="border-gray-200 border-2 max-w-100 max-h-150 rounded-md ml-4 bg-white">
       <div className="flex justify-between   ">
            <div className="flex gap-2 items-center">
               <YoutubeIcon size="xl"/>
               <div>{props.title}</div>
            </div>
            <div className="flex gap-2 items-center">
                 <ShareIcon size="lg"/>
                 <DeleteIcon size="lg"/>
            </div>
       </div>
       <div className="w-full pv-4">
       {  (props.type=="youtube") ? 
       
       <iframe className="w-full p-2 " src={"https://www.youtube.com/embed/"+LinkId} 
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
       clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
       :
       
       <div className="max-h-[400px] max-w-full overflow-y-auto scale-[0.9] overflow-x-auto scale-[0.9]origin-top-left">
         <Tweet id={""+LinkId} />
       </div>  
       
       }
        
        
        
       
      
       
       </div>
       <div className="w-full font-mono  font-bold text-md pl-10  items-center"> {props.description} </div>

    </div>);


} 
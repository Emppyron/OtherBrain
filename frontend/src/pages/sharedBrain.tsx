


import { useEffect, useState } from'react';
import '../App.css'
import {Button} from "../components/button"
import { Card } from '../components/card';
import { CreateContentModal } from '../components/createContentModal';
import { PlusIcon } from "../components/Icons/plusIcon";
import { ShareIcon } from '../components/Icons/shareIcon';
import { YoutubeIcon } from '../components/Icons/youtubeIcon';
import { SideBar } from '../components/sidebar';
import axios from "axios";
import { BACKEND_URL } from '../config';
import { useContent } from '../hooks/getContentshook';
import { ShareBrain } from '../components/shareBrainComp';
import { DisplayCard } from '../components/displayCard';

function SharedBrain({ contents,username }:{
  contents:[],
  username:string
}) {
  
  
  function getCard(x : any){
    return (
        
      <DisplayCard  type={x.type} link={x.link} title={x.title} description={x.description}/>
      ) ;
}

 // const [contents,setContents]=useState([]);
 //@ts-ignore

//@ts-ignore


//@ts-ignore
 const finalData : any[] =contents.map(getCard)
  
 

 return (
  <div className='grid grid-cols-10 gap-2'>
  
  <div className='col-span-2'> 
    <SideBar/>
  </div>
  <div className='col-span-8'>  
    <div className='bg-gray-300'>
     <h1 className='p-4'>{username}</h1>
    <div className="grid grid-cols-6 mt-4">
     
     
      <div className="col-span-3 items-center">
        {finalData}
       </div>
    
    </div>
  </div>
  </div>
  
  </div>
)


   

  
}

export default SharedBrain;


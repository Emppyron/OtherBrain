
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


function DashBoard() {
  
  const [open , onOpen]=useState(false);
  const [loading,setLoading]=useState(false);
  const contents=useContent({loading});

  function getCard(x : any){
    return (
      <Card  type={x.type} link={x.link} title={x.title} description={x.description} cardId={x._id} reloadPage={()=>{setLoading(x=>(!x))}}/>
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
    <CreateContentModal open={open} onClose={()=>{onOpen(false); setLoading((x)=>{return (!x);});}}/>
    <div className='flex flex-col '>
    <div className='flex gap-4 justify-end'>
    <Button startIcon={<PlusIcon size="lg"></PlusIcon>} variant="primary" size="sm" text="Add Content" onClick={()=>{onOpen(true)}}>
    </Button>
    <Button startIcon={<ShareIcon size="lg"></ShareIcon>} variant="secondary" size="sm" text="Share Brain" onClick={()=>{}}>
    </Button>
    </div >
    </div>
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

export default DashBoard;


import { useState } from 'react';
import './App.css'
import {Button} from "./components/button"
import { Card } from './components/card';
import { CreateContentModal } from './components/createContentModal';
import { PlusIcon } from "./components/Icons/plusIcon";
import { ShareIcon } from './components/Icons/shareIcon';
import { YoutubeIcon } from './components/Icons/youtubeIcon';
import { SideBar } from './components/sidebar';
function App() {
  
  const [open , onOpen]=useState(false);
   
  return (
    <div className='grid grid-cols-10 gap-2'>
    
    <div className='col-span-2'> 
      <SideBar/>
    </div>
    <div className='col-span-8'>  
      <div className='bg-gray-300'>
      <CreateContentModal open={open} onClose={()=>{onOpen(false)}}/>
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
        <Card  type="youtube" link="https://www.youtube.com/watch?v=Q50jSglX0hA" title="project" description="aa"/>  
       </div> 
       <div className="col-span-3">
       <Card  type="twitter" link="https://x.com/santi_lopezz99/status/1910354187797299494" title="project" description="bb"/>
       </div> 
       <div className="col-span-3">
        <Card  type="youtube" link="https://www.youtube.com/watch?v=Q50jSglX0hA" title="project" description="aa"/>  
       </div> 
       <div className="col-span-3">
       <Card  type="twitter" link="https://x.com/santi_lopezz99/status/1910354187797299494" title="project" description="bb"/>
       </div> 
       <div className="col-span-3">
        <Card  type="youtube" link="https://www.youtube.com/watch?v=Q50jSglX0hA" title="project" description="aa"/>  
       </div> 
       <div className="col-span-3">
         <Card  type="twitter" link="https://x.com/santi_lopezz99/status/1910354187797299494" title="project" description="bb"/>
       </div> 
       
      
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default App

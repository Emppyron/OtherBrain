
import { useState } from 'react';
import './App.css'
import {Button} from "./components/button"
import { Card } from './components/card';
import { CreateContentModal } from './components/createContentModal';
import { PlusIcon } from "./components/Icons/plusIcon";
import { ShareIcon } from './components/Icons/shareIcon';
import { YoutubeIcon } from './components/Icons/youtubeIcon';
function App() {
  
  const [open , onOpen]=useState(true);
   
  return (
    <>
      <CreateContentModal open={open} onClose={()=>{onOpen(false)}}/>
    
      <div className='flex justify-end'>
      <div className='flex gap-4 '>
      <Button startIcon={<PlusIcon size="lg"></PlusIcon>} variant="primary" size="sm" text="Add Content" onClick={()=>{onOpen(true)}}>
      </Button>
      <Button startIcon={<ShareIcon size="lg"></ShareIcon>} variant="secondary" size="sm" text="Share Brain" onClick={()=>{}}>
      </Button>
      </div >
      </div>
      <div className="flex ">
      <Card type="youtube" link="https://www.youtube.com/watch?v=Q50jSglX0hA" title="project" description="aa"/>
      {/* <Card type="twitter" link="https://x.com/santi_lopezz99/status/1910354187797299494" title="project" description="bb"/> */}
      </div>
    </>
  )
}

export default App

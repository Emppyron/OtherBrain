
import './App.css'
import {Button} from "./components/button"
import { Card } from './components/card';
import { PlusIcon } from "./components/Icons/plusIcon";
import { ShareIcon } from './components/Icons/shareIcon';
import { YoutubeIcon } from './components/Icons/youtubeIcon';
function App() {
  

  return (
    <>
      <div className='flex gap-4 '>
      <Button startIcon={<PlusIcon size="lg"></PlusIcon>} variant="primary" size="sm" text="Add Content" onClick={()=>{}}>
      </Button>
      <Button startIcon={<ShareIcon size="lg"></ShareIcon>} variant="secondary" size="sm" text="Share Brain" onClick={()=>{}}>
      </Button>
      </div>

      <Card type="youtube" link="https://www.youtube.com/watch?v=Q50jSglX0hA" title="project" description="aa"/>
      <Card type="twitter" link="https://x.com/santi_lopezz99/status/1910354187797299494" title="project" description="bb"/>

    </>
  )
}

export default App

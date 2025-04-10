
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

      <Card/>

    </>
  )
}

export default App


import './App.css'
import {Button} from "./components/button"
import { PlusIcon } from "./components/Icons/plusIcon";
import { ShareIcon } from './components/Icons/shareIcon';
function App() {
  

  return (
    <>
      <div className='flex gap-4 '>
      <Button startIcon={<PlusIcon size="lg"></PlusIcon>} variant="primary" size="sm" text="Add" onClick={()=>{}}>
      </Button>
      <Button startIcon={<ShareIcon size="lg"></ShareIcon>} variant="secondary" size="sm" text="Share" onClick={()=>{}}>
      </Button>
      </div>

    </>
  )
}

export default App

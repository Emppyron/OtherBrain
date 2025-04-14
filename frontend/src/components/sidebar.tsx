
import { TwitterIcon } from "./Icons/twitterIcon";
import { YoutubeIcon } from "./Icons/youtubeIcon"
import { SideBarItem } from "./sidebarItem"
export const SideBar=()=>{
    return (
    <div className="h-full  w-full rounded-r bg-gray-400">
    <div className="text-bold pl-15 text-black-900"> Other Brain </div>
    <div className="text-white">
           <SideBarItem text="Youtube" icon={<YoutubeIcon size="lg"/>}></SideBarItem>
           <SideBarItem text="twitter" icon={<TwitterIcon size="lg"/>}></SideBarItem>
    </div>
    </div>
    );
}

import { ReactElement } from 'react';

export interface SideBarItemProps{
    text : String,
    icon ?: ReactElement
}
export const SideBarItem=(props : SideBarItemProps)=>{
    return(<div className='gap-2 flex items-center p-2 '>
        {props.icon}{props.text}
    </div>
    )
}


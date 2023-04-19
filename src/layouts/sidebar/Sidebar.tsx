import React from 'react'
import SidebarLinks from './Links'

export function Sidebar() {
    return (
        <aside className='w-[15vw] fixed top-0 left-0 h-full bg-slate-600 flex flex-wrap flex-col justify-between gap-3'>
            <SidebarLinks />
        </aside>
    )
}

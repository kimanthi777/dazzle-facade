import React from 'react'

function HamburgerMenu() {
    return (
        <button className="md:hidden flex flex-col justify-between gap-1" >
            <span className="h-[2px] w-[40px] bg-white"></span>
            <span className="h-[2px] w-[40px] bg-white"></span>
            <span className="h-[2px] w-[40px] bg-white"></span>
        </button>
    )
}

export default HamburgerMenu
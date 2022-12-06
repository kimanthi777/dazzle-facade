import React from 'react'
import {Link} from 'react-router-dom'

const headerLinks = [
    {
        name: 'Payroll',
        uri: '/payroll'
    },
    {
        name: 'EOR Services',
        uri: '/eor-services'
    },
    {
        name: 'About',
        uri: '/about'
    },
    {
        name: 'Mobile App',
        uri: '/mobile-page'
    },
    {
        name: 'Pricing',
        uri: '#pricing'
    }
]

export function HeaderNav() {
    return (
        <header className="fixed top-0 mb-2 w-full h-20 bg-[#161a2e] z-10 transition-all delay-150">
            <div className="container mx-auto flex justify-between items-center text-white px-5 py-6 transition-all delay-150">
                <Link to="/" className="text-3xl font-medium transition-all delay-150">Dazzle</Link>
                <nav>
                    <button className="md:hidden flex flex-col justify-between gap-1" >

                        <span className="h-[2px] w-[40px] bg-[#fff]"></span>
                        <span className="h-[2px] w-[40px] bg-[#fff]"></span>
                        <span className="h-[2px] w-[40px] bg-[#fff]"></span>

                    </button>
                    <ul className="fixed left-0 right-0 transform translate-x-full bg-[#161a2e] min-h-screen px-5 p-5 space-y-5 transition delay-150 md:relative md:flex md:min-h-0 md:translate-x-0 md:space-y-0 md:space-x-3 xl:space-x-8 md:p-0">
                        {
                            headerLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.uri} className="hover:text-[#5a5df5]">{link.name}</Link>
                                </li>
                            ))
                        }
                        <li>
                            <a href="https://accounts.modest.lemming-76.lcl.dev/sign-up#/?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F" className="px-3 py-2 bg-white text-black rounded-md hover:bg-[#5a5df5] hover:text-white">
                                Try for free
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

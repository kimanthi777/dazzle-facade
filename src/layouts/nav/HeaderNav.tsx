import React from 'react'
import { Link } from 'react-router-dom'

import { FiSettings } from 'react-icons/fi'
import { MdNotificationsNone } from 'react-icons/md'

import avatar from '../../assets/images/avatar.png'


const headerLinks = [
    {
        name: 'Pricing',
        uri: '/pricing'
    },
    {
        name: 'features',
        uri: '/app-features'
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
        name: 'How it works',
        uri: '/'
    }
]

/**
 * 
 * const headerLinksAuth = [
    {
        name: 'Organization',
        uri: '/organization'
    },
    {
        name: 'Employees',
        uri: '/employees'
    },
    {
        name: 'Reports',
        uri: '/reports'
    },
    {
        name: 'Reciepts',
        uri: '/reciepts'
    }
]
 */

export function HeaderNav() {
    const isAuthenticated = true

    let navLeftMargin: string = '0'

    if (isAuthenticated) {
        navLeftMargin = '15vw'
    }

    return (
        <header className={`fixed top-0 mb-2 w-[100vw] overflow-x-scroll ml-${navLeftMargin} w-full h-20 bg-[#161a2e] z-10 transition-all delay-150`}>
            <div className={`container mx-auto flex w-full   ${isAuthenticated ? 'items-end' : 'items-center'} place-items-end items-end flex-row-reverse justify-between text-white px-5 py-6 transition-all delay-150`}>
                {isAuthenticated ? '' : <Link to="/" className="text-3xl font-medium transition-all delay-150">Dazzle</Link>}
                <nav>
                    <button className="md:hidden flex flex-col justify-between gap-1" >

                        <span className="h-[2px] w-[40px] bg-white"></span>
                        <span className="h-[2px] w-[40px] bg-white"></span>
                        <span className="h-[2px] w-[40px] bg-white"></span>

                    </button>

                    <ul className="fixed left-0 right-0 transform translate-x-full bg-[#161a2e] min-h-screen px-5 p-5 space-y-5 transition delay-150 md:relative md:flex md:min-h-0 md:translate-x-0 md:space-y-0 md:space-x-3 xl:space-x-8 md:p-0">
                        {
                            isAuthenticated ? ' ' :
                                (headerLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.uri} className="hover:text-[#5a5df5]">{link.name}</Link>
                                    </li>
                                ))
                                )
                        }

                        {isAuthenticated ?
                            <>
                                <Link to='/settings' className="hover:text-[#5a5df5] mt-1">
                                    <FiSettings />
                                </Link>
                                <Link to='/notifications' className="hover:text-[#5a5df5] mt-1"><MdNotificationsNone /></Link>
                                <Link to='/profile' className="hover:text-[#5a5df5]">
                                    <img src={avatar} alt='' className='w-7 h-7 rounded-full' />
                                </Link>
                            </>
                            :
                            <li>
                                <a href="https://accounts.modest.lemming-76.lcl.dev/sign-up#/?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F" className="px-3 py-2 bg-white text-black rounded-md hover:bg-[#5a5df5] hover:text-white">
                                    Try for free
                                </a>
                            </li>}
                    </ul>

                </nav>
            </div>
        </header>
    )
}
// Payroll, Organization, Reciept, Reports :: notifications icon, locale, settings icon, avatar icon 
import React from 'react'

import { Link } from 'react-router-dom'
// components
import { Text } from '../../../core/components/common'

// assets
import playSVG from "../../../assets/images/play.svg"
import Banner3 from "../../../assets/images/banner3-1.png"

const HeroSection = () => {
    return (
        <section className="bg-[#021049] text-white min-h-screen grid place-items-center" id="home">
            <div className="container mx-auto flex flex-col md:flex-row px-5 py-32 md:py-36 items-center">

                <div
                    className="flex flex-col lg:flex-grow md:w-1/2 lg:pr-8 md:items-start 
                       md:text-left items-center text-center mb-8 md:mb-0">
                    <Text as='h1' className='sm:text-4xl text-3xl mb-4 font-medium'>
                        Get Full Control and Visibility <br /> of your Company with Strategic HR.
                    </Text>

                    <Text as='p' className="mb-8 leading-relaxed">
                        Automate your Employee workflow - from information management, employee onboarding,
                        leave management, exits, and report analytics. Dazzle HR is the People orchestration system.
                    </Text>

                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="px-3 py-2 bg-white text-black rounded-md hover:bg-[#FE6B7E] hover:text-white">
                                Request Demo
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center"><img className="w-5 h-5" src={playSVG} alt="" /> <span
                                className="ml-1">How it works</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:w-1/2">
                    <img src={Banner3} alt="" />
                </div>
            </div>
        </section>

    )
}

export default HeroSection
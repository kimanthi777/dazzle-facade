import React from 'react'
import { Link } from 'react-router-dom'

import { Text } from '../../core/components'
import SectionTitle from './SectionTitle'
import LinksWrapper from './LinksWrapper'
import Subscribe from './Subscribe'
import { primaryLinks, serviceLinks, productsLinks } from '../../data'

export function Footer() {
    return (
        <footer className='bg-[#021049]' id='contacts'>
            <LinksWrapper>
                <div className='lg:w-1/2 md:w-2/3 w-full mb-10'>
                    <SectionTitle>Dazzle HR</SectionTitle>
                    <Subscribe />
                </div>

                <div className='lg:w-1/6 md:w-1/3 w-full'>
                    <SectionTitle>PRIMARY</SectionTitle>
                    <nav className='list-none'>
                        {
                            primaryLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to='/organization' className='hover:text-[#5a5df5]'>{link}</Link>
                                </li>
                            ))
                        }
                    </nav>
                </div>

                <div className='lg:w-1/6 md:w-1/3 sm:mt-0 mt-4 w-full'>
                    <SectionTitle>SERVICE</SectionTitle>

                    <nav className='list-none'>
                        {
                            serviceLinks.map((serviceLink, index) => (
                                <li key={index}>
                                    <Link to='/organization' className='hover:text-[#5a5df5]'>{serviceLink}</Link>
                                </li>
                            ))
                        }
                    </nav>
                </div>

                <section className='lg:w-1/6 md:w-1/3 sm:mt-0 mt-4 w-full'>
                    <SectionTitle>PRODUCTS</SectionTitle>
                    <nav className='list-none'>
                        {
                            productsLinks.map((productsLink, index) => (
                                <li key={index}>
                                    <Link to='/organization' className='hover:text-[#5a5df5]'>{productsLink}</Link>
                                </li>
                            ))
                        }
                    </nav>
                </section>
            </LinksWrapper>

            {/* Misc */}
            <div className='container mx-auto text-center px-5 pb-10 text-white'>
                <Text as='p' className='text-slate-600'>{new Date().getFullYear()} Dazzle HR - All Rights Reserved</Text>
                <Text as='p' className='text-slate-600'>
                    Source code on {" "}
                    <Text as='a'
                        href='https://github.com/Qodestackr/Dazzle-UI'
                        target='_blank'
                        className='text-green-500 underline'>
                        GitHub
                    </Text>

                </Text>
            </div>

        </footer>
    )
}

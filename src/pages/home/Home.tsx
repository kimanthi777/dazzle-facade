import React from 'react'
import { usePageTitle } from '../../core'

import HeroSection from './hero-section/HeroSection'
import Features from './features-section/Features'
import FreeTrial from './freetrial-section/FreeTrial'
import Pricing from './pricing-section/Pricing'


export function Home() {
    usePageTitle('Home')
    return (
        <>
            <HeroSection />
            <Features />
            <FreeTrial />
            <Pricing />
        </>
    )
}

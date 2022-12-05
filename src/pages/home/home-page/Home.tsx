import React from 'react'

import HeroSection from '../hero-section/HeroSection'
import Features from '../features-section/Features'
import FreeTrial from '../freetrial-section/FreeTrial'
import Pricing from '../pricing-section/Pricing'

export function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <FreeTrial />
            <Pricing />
        </>
    )
}

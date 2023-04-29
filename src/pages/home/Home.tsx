import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'

import HeroSection from './hero-section/HeroSection'
import Features from './features-section/Features'
import FreeTrial from './freetrial-section/FreeTrial'
import Pricing from './pricing-section/Pricing'


export function Home() {
    useDocumentTitle('Home')
    return (
        <>
            <HeroSection />
            <Features />
            <FreeTrial />
            <Pricing />
        </>
    )
}

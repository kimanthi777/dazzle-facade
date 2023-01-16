import React from 'react'

import {
    FeaturesContainer, CTACardContainer,
    CTACard, FeaturesCardContainer,
    FeaturesCard, FeaturesTitle
} from '../../../layouts/features-section'

import { FeaturesCardInfo, CTACardInfo } from '../../../data'

const Features = () => {
    return (
        <FeaturesContainer>
            <FeaturesTitle title="With all the Features You Need" description="Credibly grow premier with our all-in one HR solutions. Made for SMEs." />

            <FeaturesCardContainer>
                {FeaturesCardInfo.map(card => (
                    <FeaturesCard key={card.title} iconSrc={card.iconSrc} bg={card.bg} title={card.title} description={card.description} />
                ))}
            </FeaturesCardContainer>

            <CTACardContainer>
                {CTACardInfo.map(cta_card => (
                    <CTACard key={cta_card.cardTitle} title={cta_card.cardTitle} color={cta_card.color} cardDescription={cta_card.cardDescription} btnLink={cta_card.btnLink} />
                ))}
            </CTACardContainer>

        </FeaturesContainer>
    )
}

export default Features
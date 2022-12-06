import React from 'react'

import { Text } from '../../../core/components'
import { FeaturesContainer, CTACardContainer, CTACard, FeaturesCardContainer, FeaturesCard } from '../../../layouts/features-section'
import { FeaturesCardInfo, CTACardInfo } from '../../../data'

function FeaturesTitle({ title, description }: any) {
    return (
        <div className="flex flex-col w-full mb-8 text-center">
            <Text as="h3" className="text-2xl md:text-3xl font-medium mb-4 tracking-wide">{title}</Text>
            <Text as="p" className="lg:w-1/2 mx-auto leading-relaxed">{description}</Text>
        </div>
    )
}

const Features = () => {
    return (
        <FeaturesContainer>
            <FeaturesTitle title="With all the Features You Need" description="Credibly grow premier ideas rather than bricks and clicks." />

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
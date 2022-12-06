import React from 'react'
import { Text } from '../../core/components'

type CTACard = {
    title: string
    color: string
    cardDescription: string
    btnLink: string
}

export function CTACard({ title, color, cardDescription, btnLink, }: CTACard) {
    return (
        <div className="p-4 md:w-1/2 w-full">
            <div className="rounded-lg px-4 py-8 relative overflow-hidden bg-[#CEDDFF]">

                <div className="pr-24">
                    <Text as="h3" className={`font-medium text-lg text-${color}`}>{title}</Text>
                    <Text as="p" className="mt-3">{cardDescription}</Text>
                    <a href={btnLink}
                        className="px-4 py-2 inline-block mt-2 rounded border-2 border-solid border-[#175CFF] text-[#175CFF]">
                        Learn More
                    </a>

                </div>

            </div>
        </div>
    )
}

/* CardTitle as Text as h3, Text as p card description, btnLink */

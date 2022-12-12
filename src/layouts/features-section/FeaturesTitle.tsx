import React from 'react'
import { Text } from '../../core/components'

type FeaturesTitle = {
    title: string
    description: string
}

export function FeaturesTitle({ title, description }: FeaturesTitle) {
    return (
        <div className="flex flex-col w-full mb-8 text-center">
            <Text as="h3" className="text-2xl md:text-3xl font-medium mb-4 tracking-wide">{title}</Text>
            <Text as="p" className="lg:w-1/2 mx-auto leading-relaxed">{description}</Text>
        </div>
    )
}
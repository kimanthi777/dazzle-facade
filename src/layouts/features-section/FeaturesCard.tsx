import React from 'react'
import {Text} from '../../core/components'

type FeaturesCard = {
  iconSrc: string
  bg: string
  title: string
  description: string
}

export function FeaturesCard({iconSrc, bg, title, description}: FeaturesCard) {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
    <div className="border-2 rounded-lg border-gray-300 p-4">
        <Text as="span" className={`w-8 h-8 ${bg} inline-flex items-center justify-center rounded`}>
          <img className="w-4 h-4" src={iconSrc} alt="" />
        </Text>
        <Text as="h5" className="font-medium mt-3">{title}</Text>
        <Text as="p" className="mt-1 text-sm">{description}</Text>
    </div>
    </div>
  )
}
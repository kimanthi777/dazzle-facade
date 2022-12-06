import React from 'react'

type FeaturesCardContainer = {
  children: React.ReactNode
}

export function FeaturesCardContainer({children}: FeaturesCardContainer) {
  return (
    <div className="flex flex-wrap -m-4 justify-center">{children}</div>
  )
}

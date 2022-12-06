import React from 'react'

type FeatureContainer = {
    children: React.ReactNode
}

export function FeaturesContainer({children}:FeatureContainer) {
    return (
        <section className="bg-gray-100 grid place-items-center" id="about">
            <div className="container mx-auto px-5 py-20">
                {children}
            </div>
        </section>
    )
}

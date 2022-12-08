import React from 'react'
import { useLocation } from 'react-router-dom'

type UnderConstructionProps = {
    pageTitle: string
}

export function UnderConstruction() {
    const currentLocation = useLocation()
    const pageName = currentLocation.pathname.slice(1)

    return (
        <div className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">
            {pageName} Page is Under Construction
        </div>
    )
}

UnderConstruction.displaName = '@UnderConstruction'
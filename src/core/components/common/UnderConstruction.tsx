import React from 'react'
import { FaTools } from 'react-icons/fa'

import { Text } from './Text'

import { useLocation } from 'react-router-dom'
import { upperCaseFirstLetter } from '../../utils'
import { useDocumentTitle } from '../../hooks/use-document-title'


type UnderConstructionProps = {
    pageTitle: string
}

export function UnderConstruction() {
    useDocumentTitle('Under Construction')

    const currentLocation = useLocation()
    const pageName = (
        currentLocation.pathname==='/uc' ?currentLocation.pathname.toUpperCase()
        : upperCaseFirstLetter(currentLocation.pathname.slice(1))
        )
    
    return (
        <div className="my-20 py-12 flex justify-center items-center text-3xl font-extrabold">
            <FaTools className='text-gray-300 w-24 h-24' />

            <div className='flex flex-col justify-between items-center ml-4'>
                <Text as='h2' className='text-gray-300'>Coming Soon</Text>
                <Text as='h3' className='text-slate-600'>*{pageName} Page is Under Construction</Text>
            </div>

        </div>
    )
}

UnderConstruction.displaName = '@UnderConstruction'
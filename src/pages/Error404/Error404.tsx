import React from 'react'
import {usePageTitle} from '../../core'
import { Error404 as ErrorComponent} from '../../core/components'

export function Error404() {
    usePageTitle('Error | 404')
    return (
        <>
        <ErrorComponent />
        </>
    )
}

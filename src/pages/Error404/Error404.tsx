import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'

import { Error404 as ErrorComponent} from '../../core/components'

export function Error404() {
    useDocumentTitle('Error | 404')
    return (
        <>
        <ErrorComponent />
        </>
    )
}

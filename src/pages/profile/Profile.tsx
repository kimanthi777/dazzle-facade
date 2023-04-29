import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'


export function Profile() {
    useDocumentTitle('User | Profile')
    return (
        <>
            Profile
        </>
    )
}
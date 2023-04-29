import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'

import { ContactForm } from './_components/ContactForm'
import { ContactIMG } from './_components/ContactIMG'
import { LocationMap } from './_components/LocationMap'

const Contact = () => {
    useDocumentTitle('Contact Us')

    return (
        <div>
            <ContactIMG />
            <ContactForm />
            <LocationMap />
        </div>
    )
}

export default Contact
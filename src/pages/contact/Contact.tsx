import { ContactForm } from './_components/ContactForm'
import { ContactIMG } from './_components/ContactIMG'
import { LocationMap } from './_components/LocationMap'

import React from 'react'

const Contact = () => {
    // usePageTitle('Contact Us')

    return (
        <div>
            <ContactIMG />
            <ContactForm />
            <LocationMap />
        </div>
    )
}

export default Contact
import { ContactForm } from '@/pages/contact/_components/ContactForm'
import { ContactIMG } from '@/pages/contact/_components/ContactIMG'
import { LocationMap } from '@/pages/contact/_components/LocationMap'
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
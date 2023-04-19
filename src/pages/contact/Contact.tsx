import React from 'react'
import {usePageTitle} from '../../core'

import { ContactForm } from './_components/ContactForm'
import { ContactIMG } from './_components/ContactIMG'
import { LocationMap } from './_components/LocationMap'

const Contact = () => {
    usePageTitle('Contact Us')

    return (
        <div>
            <ContactIMG />
            <ContactForm />
            <LocationMap />
        </div>
    )
}

export default Contact
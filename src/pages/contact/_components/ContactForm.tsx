import React from 'react'



export const ContactForm = () => (
    <form className='flex flex-col border border-solid border-black'>
        <div className='flex flex-col md:flex-row gap-2'>
            <span>
                First Name*

            </span>
            <span>Last Name*</span>
        </div>

        <input type="text" className="" placeholder="Job Title" />
        <input type="text" className="" placeholder="Company Email Address*" />
        <input type="text" className="" placeholder="Company Name*" />
        <input type="text" className="" placeholder="Company size" /> {/**Lazy load the option list */}
        <input type="text" className="" placeholder="County*" />
        <input type="tel" className="" placeholder="Phone Number" />

        <textarea placeholder='Your Message*'>

        </textarea>
        <span>
            By submitting to this form,I confirm that I have read the _privacy policy_ and agree with
            the processing of my personal data for the mentioned purposes. The consent can be revoked any time.
        </span>
        <button className="">Submit Request</button>
    </form>
)
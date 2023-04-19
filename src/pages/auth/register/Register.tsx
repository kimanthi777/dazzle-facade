import React from 'react'
import { usePageTitle } from '../../../core'

export function Register() {
  usePageTitle('Register')

  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">
      Register Page
      {/* FistName, LastName, Email, Phone(needs verification), Password, AcceptTermsCheckbox */}

      {/* Verify Email & Phone <Code> */}
      {/* Move to Create Org */}
    </div>
  )
}

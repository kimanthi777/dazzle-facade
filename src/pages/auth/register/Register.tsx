import React from 'react'
import { useDocumentTitle } from '../../../core/hooks/use-document-title'

export function Register() {
  useDocumentTitle('Register')

  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">
      Register Page
      {/* FistName, LastName, Email, Phone(needs verification), Password, AcceptTermsCheckbox */}

      {/* Verify Email & Phone <Code> */}
      {/* Move to Create Org */}
    </div>
  )
}

import React from 'react'
import { usePageTitle } from '../../../core'


export function ResetPassword() {
  usePageTitle('Reset Password')
  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">ResetPassword Page</div>
  )
}

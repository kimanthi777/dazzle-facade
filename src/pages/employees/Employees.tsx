import React from 'react'
import {usePageTitle} from '../../core'
import { Sidebar } from '../../layouts'

export function Employees() {
  usePageTitle('Employees')
  
  return (
    <>
      <Sidebar />

      <div className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">
        Employees Page
      </div>
    </>

  )
}

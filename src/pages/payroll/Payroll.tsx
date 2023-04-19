import React from 'react'
import {usePageTitle} from '../../core'

export function Payroll() {
  usePageTitle('Payroll')
  
  return (
    <section className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">
      Payroll
      {/*
       Visualize as an individual, visualize as an Admin 
       Super Admin: Visualize by department
       */}
    </section>
  )
}

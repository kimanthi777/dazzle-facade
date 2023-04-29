import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'

export function Payroll() {
  useDocumentTitle('Payroll')
  
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

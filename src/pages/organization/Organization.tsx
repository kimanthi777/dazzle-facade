import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'

export function Organization() {
  useDocumentTitle('Organization')
  
  return (
    <section className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">
      Organization
    </section>
  )
}

/**
 * 1. Create New Organization
 * 2. Choose sector: [Gig workers, startup, banking, logistics, ICT, Hospitality, Financial, Insurance, Manufacturing
 * , Real Estate, Retail, Security firms, Other, ]
 * 3. Create your organization [Org name, Team size] *continue
 * 4. Country & Email * setting-up
 * 5. Free plan expires in 14 days. Later, navigation to dashboard should take direct to...
 */
import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'


export function Invoicing() {
  useDocumentTitle('')
  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">Invoicing Page</div>
  )
}

import React from 'react'
import { useDocumentTitle } from '../../core/hooks/use-document-title'

export function NoticeBoard() {
  useDocumentTitle('Notice Board')
  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl text-green-500 font-extrabold">
      No announcements on notice board
      {/* A new announcement means a notification with further description here... */}
      {/* Title, Date, Instructions, From, To, DepartmentTargets[], Message, effective from ?? etc */}
    </div>
  )
}

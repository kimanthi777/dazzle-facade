import React from 'react'

type CTACardContainerProps ={
    children: React.ReactNode
}

export function CTACardContainer({children}:CTACardContainerProps) {
  return (
    <div className="flex flex-wrap -m-4 mt-8">{children}</div>
  )
}

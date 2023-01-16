import React from 'react'

type PageTitleProps = {
    text: React.ReactNode
}

export default function PageTitle({ text }: PageTitleProps) {
    return (
        <div className='flex justify-between items-center font-semibold'>{text}</div>
    )
}

PageTitle.displayName = '@PageTitle'
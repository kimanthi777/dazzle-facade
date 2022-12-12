import React from 'react'

type LinksWrapper = {
    children?: React.ReactNode
}

function LinksWrapper({ children }: LinksWrapper) {
    return (
        <div className='container mx-auto px-5 py-32 text-white'>
            <div className='flex flex-wrap'>
                {children}
            </div>
        </div>
    )
}

export default LinksWrapper
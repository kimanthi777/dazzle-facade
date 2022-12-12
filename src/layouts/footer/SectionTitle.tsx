import React from 'react'
import { Text } from '../../core/components'

type SectionTitle = {
    children?: React.ReactNode
}
function FooterTitle({ children }: SectionTitle) {
    return (
        <Text as='h3' className='font-medium tracking-widest text-lg mb-2'>{children}</Text>
    )
}

export default FooterTitle
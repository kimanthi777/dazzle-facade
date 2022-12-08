// not useful unless you are building a component library or design system 
import React from 'react'

import { TextProps } from './text-types'

// h1,h2,h3,h4,h5,label, p,
// e.g <Text className = '' as = 'p'>{children} </p>
export function Text<E extends React.ElementType = 'div'>({ as, className, children }: TextProps<E>) {
    const TagName = as || 'div'

    return (
        <TagName className={className}>{children}</TagName>
    )
}

Text.displayName = '@Text'
// not useful unless you are building a component library or design system 
import React from 'react'

type TextOwnProps<E extends React.ElementType> = {
    className: string
    children: React.ReactNode
    as?: E
}

// we now have all the types of the element except for the types that we have specified ourselves 
type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

// h1,h2,h3,h4,h5,label, p,
function Text<E extends React.ElementType = 'div'>({ as, className, children }: TextProps<E>) {
    const TagName = as || 'div'

    return (
        <TagName className={className}>{children}</TagName>
    )
}

export default Text
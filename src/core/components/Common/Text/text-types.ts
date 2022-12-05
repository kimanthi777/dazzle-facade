
type TextOwnProps<E extends React.ElementType> = {
    className: string
    children: React.ReactNode
    as?: E
}

// we now have all the types of the element except for the types that we have specified ourselves 
export type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
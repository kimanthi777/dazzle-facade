
type TextOwnProps<E extends React.ElementType> = {
    className: string
    children: React.ReactNode
    as?: E
}

/***
 * In JavaScript, we use Object.keys to get a list of property keys
 * ? keyof Type: Works in types and returns a literal union type
 * EXAMPLE:
 *     type Point = {x: number; y: number} // *check type P = keyof Point
 * TODO: Understand keyof & Omit in TS/ React
 * DONE: Build polymorpic component
*/

// we now have all the types of the element except for the types that we have specified ourselves 
export type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
// we are removing our own types since they are props???

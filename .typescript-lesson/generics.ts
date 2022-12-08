// generics use a Type parameter (as placeholder name for the types that generic function or class)
// will work with at runtime.
// TS will infer based on runtime argument passed
// Logic for handling values is the same. Makes a component work with multiple types

function identity<T>(value: T): T {
    return value
}

type university = {
    name: string,
    location: string
    founded_date: string
    performs: boolean
    rank?: number
}

const result1 = identity<string>('Wilson Gichu')
const result2 = identity<number>(40)
const result3 = identity<boolean>(true)
const result4 = identity<university>({ name: 'JKUAT', location: 'Juja', founded_date: '1976', performs: true, rank: 2 })

console.log(result1, result2, result3)
console.table(result4)
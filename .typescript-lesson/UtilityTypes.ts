/**
 * TODO: Omit
 * ? Omit Constructs a type by picking all properties from Type 
 * ? and then removing Keys (string literal or union of string literals).
 */

type own = {
    name: string
    age: number
    height: number
    speed: string
}

type Me = Omit<own, 'speed'>

let winchy:Me = {
    name: 'wilson',
    age: 22,
    height: 1.8,
   /** speed: '100kph' !Not allowed anymore **/
}

console.log(`⚡️ ------------------------------------------⚡️`)
console.log(`⚡️ 🔋️ file: index.ts:27 🔋️ winchy`, winchy)
console.log(`⚡️ ------------------------------------------⚡️`)

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TodoPreview = Omit<Todo, "description">;
   
  const todo: TodoPreview = {
    title: "Clean room",
    // description: "",not allowed
    completed: false,
    createdAt: 1615544252770,
  };

//   Awaited
//   
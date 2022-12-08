// generics use a Type parameter (as placeholder name for the types that generic function or class)
// will work with at runtime.
// TS will infer based on runtime argument passed
// Logic for handling values is the same. Makes a component work with multiple types
function identity(value) {
    return value;
}
var result1 = identity('Wilson Gichu');
var result2 = identity(40);
var result3 = identity(true);
var result4 = identity({ name: 'JKUAT', location: 'Juja', founded_date: '1976', performs: true, rank: 1 });
console.log(result1, result2, result3);
console.table(result4);

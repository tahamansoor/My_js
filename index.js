//random id or password
const id = Math.random().tostring(36).substring(2);
console.log(id)

//shuffle an array
var arr = [A, B, C, D, E, F]
console.log(arr.slice().sort(()=> Math.random() -0.5 ))

//reverse a string 
const stringReverse = str => str.split("").reverse().join("")

// assign multiple variable

var [a,b,c,d] = [20,14,44,'tm']
console.log(a,b,c,d)

//swapping two variable
let a = 5
let b = 7
[a,b] = [b,a]
console.log(a)
console.log(b)

// remove duplicate in an array
const removeDuplicates = (arr) => [...new Set(arr)]
removeDuplicates([11,13,100,31,142,13])

// Array as expected is an object
// So there are several ways of declaration

let case_num = [2,5,63,25,6]
let precinct = ["Patrick Jane","Teresa Lisbon","Kimball Cho", "Wayne Rigsby","Van Pelt"]
let random = ["Patrick","7","true"] // can be of any datatype
// and arrays are resizeable thoroughout the program too >>

// if arrays are copied, they follow the rules of shallow copying
// this means that reference is given to the same object (Heap Memory)

console.log(random[0])

// Array Methods

// push and pop simply works like the concept of stack
case_num.push(78)
console.log(case_num)
case_num.pop() // no need of any argument
console.log(case_num)

//unshift and shift simply works like the concept of queue and dequeue
case_num.unshift(56)
console.log(case_num)
case_num.shift()
console.log(case_num)

// to check array elements
console.log(case_num.includes(2))
console.log(case_num.indexOf(34567))

// join method
const case_num_new = case_num.join('-') 
console.log(case_num_new)
console.log(typeof case_num_new)
// the argument of join method acts as symbol which will come b/w two elements
// and join methods makes it into string


// slice and splice
// slice - doesn't affect the og array
// splice affects the og array


let case_num_new_2 = case_num.slice(1,3) // will store elements from index 1 to 2 (3-1)
console.log(case_num)
console.log(case_num_new_2)
let case_num_new_3 = case_num.splice(1,3)
// this will store the index from 1 to 3 and the og array will have remaining elements
console.log(case_num)
console.log(case_num_new_3)

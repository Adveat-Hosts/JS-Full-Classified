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

// -------------------------------Array 2nd Lecture---------------------------------------

const blake_asso_1 = ["Thomas", "Bertram","Reede"]
const blake_asso_2 = ["Timothy","Oscar","Lorelei"]

// push function
blake_asso_1.push(blake_asso_2) // added the entire array as one element
console.log(blake_asso_1)
console.log(blake_asso_1[3][2]) // tedious was of representation

// concat function (Returns an array)

const blake_asso_1_1 = ["Thomas", "Bertram","Reede"]
const blake_asso_2_2 = ["Timothy","Oscar","Lorelei"]
const blake_asso_3_3 = blake_asso_1_1.concat(blake_asso_2_2)
console.log(blake_asso_3_3) // all elements come one by one

// ...method (Spread Operator)
const blake_asso_3_3_3 = [...blake_asso_1_1,...blake_asso_2_2]
console.log(blake_asso_3_3_3)

// flat method 
const case_num_4 = [1,2,[3,4,[45,6,7],[56,7]],67,8]
case_num_4_new = case_num_4.flat(Infinity) //means it will spread out the array till infinite depth
console.log(case_num_4_new)

//some boolean methods
console.log(Array.isArray("Red John"))
console.log(Array.isArray(case_num_4))
console.log(Array.from("Red John"))
console.log(Array.from({name : "Red John"})) // interesting case when object is passed
// returns empty array as we don't know whether on keys or values

// Array.of method

const kill_day_1 = 17
const kill_day_2 = 12
const kill_day_3 = 11

console.log(Array.of(kill_day_1,kill_day_2,kill_day_3))
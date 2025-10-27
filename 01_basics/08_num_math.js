// We can declare number like an object too, just like string

const kill_count = 40

const list = new Number(7) // output of this will be shown differently
console.log(list)
console.log(kill_count)

console.log(kill_count.toString().length) // Converts it to a string and we can use String Properties
console.log(list.toString()) 

console.log(kill_count.toFixed(4)) // precision of decimal places

const probability = 2.5476438 
console.log(probability.toPrecision(3)) // concept of significant figures
// sometimes gives answer in scientific notation if very big approx is made

const money = 10000000
console.log(money.toLocaleString('en-In')) // to show currency in Indian notation


// ------------------------------------MATHS------------------------------------------

// Math is an Object

console.log(Math)

// there are constants like min, max and safe integer values
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

console.log(Math.abs(-kill_count)) // modulus function
console.log(Math.round(47.635456)) // To nearest interger
// then there is floor and ceil method too

console.log(Math.max(kill_count,probability,money))
// and similarly there is a min function 

// Below is the most important application, which is the random function

console.log(Math.random()) // always gives output b/w 0 and 1
console.log(Math.floor(Math.random()*10)+1) // logic to get numbers b/w 1 to 10

// following is the logic to get values b/w any range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)
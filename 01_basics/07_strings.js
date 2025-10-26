// There are various ways of creating a string

const cbi_hacker = "Grace Van Pelt"
const age = 25

// console.log("The hacker of CBI is "+ cbi_hacker+ " and she is "+age +" years old")
// Above method is very non-professional >>>

console.log(`The hacker of CBI is ${cbi_hacker} and she is ${age} years old`)

// There are tonnes of methods for string for which you will to create it as object
// You can explore these methods using Console section of the website

const asian = new String('Kimball Cho')

console.log(asian[0])
console.log(asian.length)
console.log(asian.substring(0,4))
console.log(asian.toUpperCase())
console.log(asian.charAt(8))
console.log(asian.indexOf(' '))

const asian_first = asian.substring(0,7)
console.log(asian_first.substring(0,4))

const asian_last = asian.slice(-3) // means it takes last 3 char form behind
console.log(asian_last)

const bad_input = "     Kimball    Cho          "
const continuous = bad_input.trim() // only removes starting and trailing zeros
console.log(continuous)

const bad_input_2 = "Kimball-Cho"
console.log(bad_input_2.replace('-',' '))

console.log(asian.includes('Cho'))

// visit Mdn Strings documentations to explore more >>>
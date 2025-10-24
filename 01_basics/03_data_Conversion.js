let billions = 33
console.log(typeof billions)

let trillions = "45"
console.log(typeof(trillions))
trillions = Number(trillions)
console.log(typeof(trillions))

// and in case that string isn't an number, the output is NaN

///arly

billions = 1
billions = Boolean(billions)
console.log(billions)

/* major you will get a string value from the frontend which you will convert to
   appropriate datatype at the backend */

// converting null into number gives you 0
// for string to boolean, if the string is empty then 0 otherwise 1

// ------------------------------Operation----------------------------------------------

// there are simple oreation which we will use on strings and 

console.log(2+2)
let str1 = "William"
let str2 = " Blake"

console.log(str1 + str2)

console.log(1 + 1 + " " + str1)

console.log(1 + "1")

console.log(1 + "1" + 2)

console.log("2" + 1 + 1)

console.log(1 + 2 + "1") //if string datatype comes first then everything is string

// then there is pre-incement and post-increment which you are already aware about >>
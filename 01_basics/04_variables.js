// Comparison gives output in true and false

console.log(2 >= 4)
console.log(2 <= 4)
console.log(2 > 4)
console.log(2 < 4)

// if the string has a number then fair comparison again 
console.log("024" > "021")

console.log("Red" > "021") //Since the Unicode value of "R" (82) is greater than the Unicode value of "0" (48)
                           //the comparison stops immediately, and the expression is evaluated as true

// === means strict comparison means along with values, it checks for datatypes too

console.log("4" === 5)
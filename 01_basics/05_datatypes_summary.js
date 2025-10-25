// There are two types of datatypes :- Primitive & Non-Primitive

// Primitive :- String, Number, Boolean, Symbol, BigInt, Null, Undefined
// These work by call by value

// Non - Primitive :- Array, Object, Function
// THese work by call by reference

// JS is dynamic and not static like c or Java where we need to declare datatype 
// of a variable before assigning a value

const is_name = "Red John"
const is_criminal = true
const brain_cells = 5674579697489563585674576890n
const kill_count = undefined
const friends = null
const hater1 = Symbol("Patrick")
const hater2 = Symbol("Patrick")
// Two symbols are always unique even if you pass the same argument

console.log(hater1 === hater2)

const precinct = ["Teresa Lisbon", "Vega", "Wayne Rigbsy", "Kimball Cho"]

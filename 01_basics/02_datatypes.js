"use strict";

let name = "Red John"
let age = undefined
let empathy = 100
let secrecy = null
let is_locked_in = true

// Number has a max range odf 2^53
// otherwise use big int 
// null is somehow an object, it's when you don't have an information about something
// undefined is simply an undefined quantity

console.table([typeof name, typeof secrecy])
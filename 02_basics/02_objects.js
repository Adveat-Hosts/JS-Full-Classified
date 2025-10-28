// Singleton :- Formed when done using a constructer (Object.create())

//Literals formed by how we will be learning below

const mysym = Symbol("Tyger")

const consultant = {
    name : "Patrick",
    "full name" : "Patrick Jane",
    [mysym] : "Tyger",
    age : 44,
    location : "Sacramento",
    has_taken_revenge : true,
    sleeping_days : ["Mondays", "Thursdays"],
}

console.log(consultant.name)
console.log(consultant["name"]) 
// the second way of representation is necessary to display keys like full name
console.log(consultant["full name"])

console.log(consultant[mysym]) // but this is used as a string and not a symbol!
console.log(typeof consultant[mysym])
console.log(consultant) // symbol is exxagerated at the end

// to change any value
consultant.sleeping_days = ["Mondays","Thursdays","Saturdays"]
console.log(consultant.sleeping_days)

//if I don't want further change to happen, I will use Object.freeze(consultant)
// after that any assignment to the keys won't make any differnce
// There are two types of memory :- Stack (Primitive Datatypes) and Heap (Reference Datatypes)

let member1 = "Gale Bertram"
let member2 = member1
member2 = "Oscar Cordero"


console.log(member1)
console.log(member2)

// Here a copy of value of member1 is created and is assigned to member2
// Therefore change in value of member2 doesn't affect member 1
// However this isn't the case in terms of heap memory

let blake_association = {
    leader : "Sheriff Thomas McAllister",
    member3 : "Bret Partridge",
}

let blake_association_2 = blake_association

blake_association_2.member3 = "Timothy Carter"
// Here the blake_association and blake_association_2 point to the same 
// stored value, so it would alter the original data
console.log(blake_association.member3)




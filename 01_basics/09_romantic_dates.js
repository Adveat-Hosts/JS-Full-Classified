// Date is an object just like Math

const kill_date = new Date()
console.log(kill_date) // this is not very readable so we have differnt methods

console.log(kill_date.toString()) // makes more sense but we can do more customizaton

console.log(kill_date.toDateString())
console.log(kill_date.toLocaleString())
console.log(typeof (kill_date))

// we can statically create our own date, but note that month starts from 0

const stalk_date_1 = new Date(2025,9,25,1,11,11) // first three are date and rest is time
console.log(stalk_date_1.toLocaleString())

const stalk_date_2 = new Date("2025-9-26")
console.log(stalk_date_2.toLocaleString())

// we use the concept of timestamps for comparison
const kill_moment_1 = Date.now()
console.log(kill_moment_1) // gives us the milliseconds passed since 1970
console.log(stalk_date_2.getTime()) // works same as above as object of date

// Further specific info

const kill_date_2 = new Date(2025,2,4,4,44,44)
console.log(kill_date_2.toLocaleString())
console.log(kill_date_2.getDay())
console.log(kill_date_2.getMonth() +1 )

console.log(kill_date_2.toLocaleString('default',{
    weekday: "long",
})) //etcetra
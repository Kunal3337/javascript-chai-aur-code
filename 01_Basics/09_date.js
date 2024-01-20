// let apple = new Date()
// console.log(apple.toString()) // Output - Sat Jan 20 2024 08:10:52 GMT+0000 (Coordinated Universal Time)
// console.log(apple.toDateString()) // Output -  Sat Jan 20 2024
// console.log(apple.toISOString()) // Output - 2024-01-20T08:10:52.170Z
// console.log(apple.toJSON()) // Output - 2024-01-20T08:10:52.170Z
// console.log(apple.toLocaleDateString()) // Output - 1/20/2024
// console.log(apple.toLocaleString()) // Output - 1/20/2024, 8:10:52 AM
// console.log(apple.toLocaleTimeString()). //Output - 8:10:52 AM

// console.log(typeof apple);  // Date is Object

// let createdate = new Date(2023, 0, 23)

// let createddate = new Date(2023,4,14,5,6)

let Kunal = new Date("01-14-2017")
// console.log(Kunal.toLocaleString()) 

let ti = Date.now()
console.log(ti)
console.log(Kunal.getTime())


let cricket = new Date()
console.log(cricket.getMonth())
console.log(cricket.getDay())

cricket.toLocaleString('default', {
    weekday: "long"
})

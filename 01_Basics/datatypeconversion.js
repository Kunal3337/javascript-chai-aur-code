let roll_no = 233
console.log(typeof roll_no);
console.log(typeof (roll_no));
//output will be number

let alphabet = String(roll_no)
console.log(alphabet)
console.log(typeof alphabet)
/* Output will be 233 and String */

let kunal = "Kumar"
console.log(kunal)
console.log(typeof kunal )
//Output will be kumar and string

let naam = Number(kunal)
console.log(naam)
console.log(typeof naam )
//Output will NaN and number

/* String to number conversion
"33" = 33
"33abc" = NaN */

// Number to String is vice-vera

let kun = true
let kum = Number(kun)
console.log(kum)

//true = 1 || false = 0
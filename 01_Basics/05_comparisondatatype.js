// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=3);

console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// Output
// false
// false
// true

// The reason is that an equality check == and comparisons  >, <, >= , =< , works differently.
//Comparisons convert null to a number, treating as 0.
// Thats's why (3) null >= 0  is true and (1) null > 0 is false

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)
//Output
/*
False
False
False
*/

console.log("2" == 2) // The Output will be TRUE as it coverts automatically string to number
console.log("2" === 2) // The Output will be FALSE as it not coverts datatypes automatically to string to number



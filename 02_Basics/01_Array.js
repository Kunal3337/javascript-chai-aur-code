let Myarr = [0,1,2,3,4,5,6,7]
let name = ["Krishna", "Ram", "Hanuman", "Vishnu"]
console.log(Myarr[1])
console.log(Myarr.push(9)) // push function insert the number in the last of an array
// There is pop() function which delete the digit of last index
// unshift() is used to insert the element in the beggining of the array
//shift() is used to remive the element in the beginnign of the array
console.log(Myarr)

console.log(Myarr.unshift(9)) // unshift function insert digit in the bracket in the beginning
// shift is vice versa
// includes() function helps to find out whether the element is present in array
// indexOf() function

let arr = Myarr.join() // join() function is used to covert into string
console.log(Myarr.join())

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

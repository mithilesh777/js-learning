const marks = 500; // there is no data type defined 
console.log(marks)

const accountBalance = new Number(800.9890)
console.log(accountBalance) // data type will be Number

//Number to String 
console.log(accountBalance.toString())

// fixed decimal values upto certain limit after .
console.log(accountBalance.toFixed(3))

//convert number in non indian representatin
const Rupee = 10029390
console.log(Rupee.toLocaleString())

//convert number in indian representatin
const inputRupee = 10029390
console.log(inputRupee.toLocaleString('en-IN'))

//Maths
// Absolute value
const num = -20;
console.log(Math.abs(num))

// round off
const decimalValue = 92.87
console.log(Math.round(decimalValue))

// ceil and floor
const number1 = 5.2
console.log(Math.ceil(number1)) // will consider higher value
console.log(Math.floor(number1)) // will consider lower value

console.log(Math.min(2,9,1,8)) // get min value
console.log(Math.max(2,9,1,8)) // get max value

console.log(Math.random()) // always give random values between 0 to 1
/*
Primitive 

number
bigInt
String --> ""
boolean --> true false
null --> standone value
undefined --> not defined value
symbol --> unique

Non Primitive:

Object
Array

*/

console.log(typeof "Testers_zone");
console.log(typeof 12);
console.log(typeof 123019281928192891n);
console.log(typeof false);
console.log(typeof m);
console.log(typeof null);
console.log(typeof [2,3,1,2,0]);
console.log(Symbol("id"));

// String to Number or vice versa conversion
let id = "7";
let password = 12345;
console.log(typeof Number(id));
console.log(typeof String(password));


//Special Notes
let firstName = "TestersZone";
let lastName = null;
let isEmailPresent = false;
let mobileNo = 9087609897;
let rollNo;

let out = Number(firstName);
console.log(typeof out);
console.log(out); // String is getting converted in number but value is NaN

let out1 = Number(rollNo);
console.log(typeof out1);
console.log(out1); // String is getting converted in number but value is NaN


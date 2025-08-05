/*
Primitive --> it use to store in Stack memory

number
bigInt
String --> ""
boolean --> true false
null --> standone value
undefined --> not defined value
symbol --> unique

Non Primitive: It use to store in heap memory

Object
Array
Functions

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

const arr = ["java","python","javascript"];
let arr1 = {
    name: "MS",
    age: 23
}

// For data type reference for primitive data type we can check this: https://262.ecma-international.org/5.1/#sec-11.4.3 

// As i menntioned primitive values store in stack and non primitive stores in heap.
// Stack basically is example of pass by values and Heap is example of pass by reference
// pass by value --> we create one new copy and do the changes only in copy not in main value

let name = "Mithilesh Singh";
let fullName = name;

console.log(name);
console.log(fullName);

fullName = "Testers_Zone"
console.log(name);
console.log(fullName);


// pass by reference --> we create variable and give the reference of older values, 

let valueOne = {
    firstN : "MS",
    mobile : 9890289
}
let valueSecond = valueOne

console.log(valueOne.firstN);
console.log(valueSecond.firstN);

valueSecond.firstN = "Modified"

console.log(valueOne.firstN);
console.log(valueSecond.firstN);
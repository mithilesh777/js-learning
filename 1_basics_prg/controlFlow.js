//if condition

if(true) {
    // will execute only if condtion is true
}
// Relational operators --> < , > , <= , >= , == , != , === , !==
// output of ralational operator would be either true or false

//Example
if(2!= 3) {
    console.log("inside the if block");
}
//Example 2
if(3 == "3") {
    console.log("only checked the value not data type")
}
//Example 3
if(3 === "3") {
    console.log("checked the value as well as data type")
}
// block program can not be accessed outside of the block. their existance would be inside of block.
if(true) {
    var course  = "java"
    console.log("inside course block");
}
console.log(`outside of course block: ${course}`); // this is working due to var which is not recommended now. we should use let or const

//if-else
let accountBalance = 500;

if(accountBalance >= 500) {
    console.log("amount is greater than 500")
}
else {
    console.log("amount is less than 500")
}

//Switch condition
let month = 3
switch(month) {
    case 1:
        console.log("Monday");
        break;  
    case 2:
        console.assertlog("Tuesday")  
    case 3:
        console.log("Wednesday");  
    default:
        break;    
}

// falsy values:
// false, 0. -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
// "0", 'false', " ", [], {}, function() {}

//Example
if('0') {
    console.log("it is not fa;sy value")
}

if(0) {
    console.log("it is not fa;sy value")
}

// Nullish Coalescing Operator (??): null undefined
// it applicables on null or undefined values. 
// if first value is null or undefined then will shift to second value


let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = 95 ?? undefined
let val4 = null ?? undefined ?? 8
let val5 = null ?? 89 ?? undefined ?? 8

console.log(val1,val2,val3,val4,val5)

// terniary operator is different then Nullish Coalescing Operator
// This checks the condition first, if it's true then first value or if it's false then 2nd value will be getting printed.

0 === '0' ? console.log(true) : console.log(false);
//Syntax--> function nameOfFunction() { }

//Non parameterize function
function getFruitsName() {
    console.log("Banana")
    console.log("Mango")
    console.log("Apple")
    console.log("Orange")
    console.log("watermelon")
}

//call function
getFruitsName //--> this is reference call
getFruitsName() // functionCall

//parameterized function]

function addNumbers( num1, num2) {
    const result = num1 + num2
    return result
}
console.log(addNumbers(10,90)) // console.log is required to print the returned value.

// rest or spread operator in function
// you can pass multiple values as parameter, there is no restriction

function calculateCartPrice(...values) {
    return values
}

console.log(calculateCartPrice(300,111,1543, true, "MS"))
 
// Object as argument in the function
function objectArgFunction(anyObject) {
    console.log(anyObject)
}

const usersDetail = {
    name : "JS",
    add : "India"
}
objectArgFunction(usersDetail) 

//we can also pass object directly
objectArgFunction({
     name : "JS",
     add : "India"
}) 
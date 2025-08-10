
/*
Object Method: When a function is a method of an object, this refers to the object itself.
*/
const user = {
    username : "Mithilesh",
    course : "Java",
    fee : "1250",
    subscription : function() {
        console.log(`welcome ${this.username} to this course..`)
        // this keyword use to access the current context
        console.log(this) // this will return the entire context. 
    }
}

console.log(user.subscription())
console.log(this) // this will return the empty object because there is no context to be referred here.

/* 
When a function is called directly (e.g., testers()), this refers to the global object (window in browsers, global in Node.js).
*/

function testers() {
    console.log(this)
}
testers()

//calling variables through this inside function
// First way to define function

function testersZone () {
    const name = "Msingh"
    console.log(this.name)
}
testersZone();

//or 
// Second way to define funtion

const  testersZone1 = function () {
    const name = "Msingh"
    console.log(this.name)
}
testersZone1();

//or
// Third way to define funtion
const  testersZone2 = () => {
    const name = "Msingh"
    console.log(this.name)
}
testersZone2();


//Note:
/*
The this Keyword
In JavaScript, the value of this is determined by how the function is called, not where it's defined.
In your code, the function testersZone() is being called directly, without being attached to any object. When a function is called this way in non-strict mode, this refers to the global object (window in a browser, or global in Node.js).
When you run console.log(this.name), the code is essentially trying to find a property named name on the global window object, which doesn't exist. This results in the output undefined.
*/


// when to use return keyword in arrow function
// This is the most common and clear way to write it. You declare a variable and assign the arrow function to it.
const getName = (name) => {
    return name;
}
console.log(getName("MS"))

//For a function that only has a single return statement, you can simplify the syntax by removing the curly braces {} and the return keyword. The return is implied.
const getName1 = (name) => name;
console.log(getName1('MS'))

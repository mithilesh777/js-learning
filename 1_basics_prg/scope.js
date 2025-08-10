// normal declaration and access

let a = 10
const b = 20
var c = 30

console.log(a,b,c)

// access inside scope

function scopeTest() {
    let x = 10
    const y = 20
    var z = 30
}
//console.log(x) // --> No Accessible
//console.log(y) // --> Not Accessible
//console.log(z) // --> Not Accessible

if(true) {
    let s = 10
    const t = 20
    var u = 30
}

// console.log(s) // --> No Accessible
// console.log(t) // --> Not Accessible
console.log(u) // --> Not Accessible

//Note: scope of varible for function would be inside function itself but for block it can be accessible outside of block if it's type is var. 
// we avoide var in program.


// function inside function

function one() {
    const usernameP = "parentUserName"

    function two() {
        const useNameC = "childName"
        console.log(usernameP)
        console.log(useNameC)

    }
    //  console.log(useNameC) // This is not allowed because child variable we are trying to access in parent
    two()
}
one()
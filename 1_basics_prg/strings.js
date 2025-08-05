let firstName = "Testers_Zone"
let lastName = "Automation"

//console.log(firstName + lastName + " Learning"); --> does not look professional
console.log(`My full name is ${firstName} ${lastName}`)

console.log(firstName.toUpperCase())
console.log(firstName.length) // length of string
console.log(firstName.charAt(3)) // character at specific index
console.log(firstName.indexOf('t')) // index of specific character 
console.log(firstName.substring(0,5)) // break the sub string from index 0 to 4
console.log(firstName.slice(0,5))
console.log(firstName.trim()) // remove extra spaces from begining and ends
console.log(firstName.replace("Testers","Automation"))
console.log(firstName.includes("Zone"))
console.log(firstName.split('_')) // divide String based on '_'
console.log(firstName.endsWith("one")) // String ends with specific string
console.log(firstName.repeat(2)) // Repeat String based on count specified.


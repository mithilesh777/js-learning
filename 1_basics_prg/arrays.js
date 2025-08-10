//way 1 --> Array declaration

const arrNumber = [0,3,5,9,4] 
const arrString = ["Java", "Python", "JS"]
const arrMix = ["Testers", "Java",1,true]

//way 2 --> Array Declaration

const arr2 = new Array(1,4,2)

//Accessing Arrays
console.log(arrNumber[3]);
console.log(arrString[2]);
console.log(arr2[3]); // there is no element at index 3 so it will return undefined.
console.log(arrMix)

// Adding element in Array at last
arr2.push(0)
console.log(arr2)
// Adding element in Array at beginning
arr2.unshift(8)
console.log(arr2)

//remove element from the end
arr2.pop()
console.log(arr2)

//remove element from the beginning
arr2.shift()
console.log(arr2)

// to check if array contains value
console.log(arr2.includes(8))

// get value based on index
console.log(arr2.indexOf(2))

// if index is not present the output would be -1
console.log(arr2.indexOf(13))

//Arrays to String conversion
console.log(arr2.join())

// uses of slice and splice 
const arrayA = [3,4,2,5,1,6]
console.log(arrayA.slice(1,3)) // does not modify in existing array
console.log(arrayA)

console.log(arrayA.splice(1,3)) // modify in existing array
console.log(arrayA)


// use of concat in array
const arrPrograms = ["Java", "Python", "Go", "Ruby"]
const arrInstitutes = ["QSpider", "ABC", "BesantTech"]

console.log(arrPrograms.concat(arrInstitutes)); //will append the array elements at the end of the array
//arrPrograms.push(arrInstitutes); // It will push the entire array as a object 
//console.log(arrPrograms); // [ 'Java', 'Python', 'Go', 'Ruby', [ 'QSpider', 'ABC', 'BesantTech' ]]

// spread operator in Array --> ... known as spread operator in the JS and it works simillar as concat 
console.log([...arrPrograms, ...arrInstitutes])

// use of flat function in the array, we use it to simplify multi level array inside array concept
const arrayInsideArray = [1,2,3,[3,2,1], 9,0,[2,3,[1,9]]];
console.log(arrayInsideArray); // will print same structure of array

console.log(arrayInsideArray.flat(Infinity)); // we need to provide the depth count of array like how many level of array inside array is present. but if you are not aware then better to use Infinity

// String to array conversion
console.log(Array.from('826909929'))
console.log(Array.from('Mithilesh'))

const firstName = "Mithilesh"
const mobileNumber = 826902937
const course = "Java"


console.log(Array.of(firstName, mobileNumber, course)) //converts multiple values in the array form



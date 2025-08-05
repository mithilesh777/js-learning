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



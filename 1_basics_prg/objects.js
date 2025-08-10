//Singleton --> const object = new Object();

//object literals --> data will be there in key values pair
const jsUser = {
    name : "Testers_Zone",
    course : "SDET",
    Programs : "Java",
    isLearning : false,
    learningDays : ["Monday", "WednesDay", "Friday"]
}

console.log(jsUser.course) // way 1 to access the object elements
console.log(jsUser["learningDays"]) // way 2 to access the object elements

jsUser.course = "Python" // assign new value
console.log(jsUser.course)

//frerze the object to avoid further modification
Object.freeze(jsUser)
jsUser.course = "JS" // assign new value
console.log(this.course) // since object is freezed it will not allow to change the value

const fbUser = {} // empty object

//adding values in the object
fbUser.fbId = "111",
fbUser.fbName = "TZ",
fbUser.fbFollowers = "5k"
console.log(fbUser)

// we can have object inside object
fbUser.followerDetails = {
    name : "Manoj",
    isActive : true,
    time : "3 years"
}
console.log(fbUser)

// we can access the nested object elements using .
console.log(fbUser.followerDetails.time)

//merge 2 objects 
const obj1 = {
    studentN1 : "MS",
    school1 : "XYZ",
    country1 : "India"
}
const obj2 = {
    studentN2 : "MSD",
    school2 : "XY",
    country2 : "India"
}

const finalObj = Object.assign({},obj1,obj2) // --> using assign
const finalObj1 = {...obj1, ...obj2}
console.log(finalObj)
console.log(finalObj1)

// multiple objects in a array

const multipleObjectsInArray = [
    {
        studentN2 : "MSD",
        school2 : "XY",
        country2 : "India"
    },

    {
        name : "Manoj",
        isActive : true,
        time : "3 years"
    }
]
console.log(multipleObjectsInArray)

// access specific object through index
console.log(multipleObjectsInArray[1])
console.log(multipleObjectsInArray[1].isActive)

//access all the available keys and values
console.log('All the keys : ' , Object.keys(multipleObjectsInArray))
console.log('All the values : ' , Object.values(multipleObjectsInArray))

//To check if value is present or not?
console.log(multipleObjectsInArray[0].hasOwnProperty('name')); //--> false
console.log(multipleObjectsInArray[1].hasOwnProperty('name')); //--> true

// destructuring of Object

const destructuringObj = {
    value1 : "MS",
    value2 : "MAS2"
}
// we can call the values using below syntax
console.log(destructuringObj.value1);

// or using destructuring of Object


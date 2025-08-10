// First way to declare the function and invoke without IIFE
function testersZone () {
    const name = "Msingh"
    console.log(name)
    var k = "kumar"
}
testersZone();


// using IIFE --> non parameterised function invoke 
(function testersZone () {
    const name = "Testers"
    console.log(name)
})()

// //or 
// // Second way to define funtion without IIFE

const  testersZone1 = function () {
    const name = "2_withoutIIFE"
    console.log(name)
}
testersZone1();

// with IIFE
const  testersZone2 = (function () {
    const name = "2_withIIFE"
    console.log(name)
})()

// 
//or
// Third way to define funtion - withoutIIFE
const  testersZone3 = () => {
    const name = "3_withoutIIFE"
    console.log(name)
}
testersZone3();

// Third way to define funtion - withIIFE
const  testersZone4 = (() => {
    const name = "3_withIIFE"
    console.log(name)
})();

// if we are using IIFE then better not to store it in variable because we are not calling that function explicitly.
(() => {
    const name = "4_withIIFE"
    console.log(name)
})()
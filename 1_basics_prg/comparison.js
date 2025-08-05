//These are very simple comparison because datatype for both the numbers are same

console.log(2 > 1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2 != 1);

//When data types are not same. js converst String into number and then do the comparison

console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // js convert null to zero in this case and then do the comparison

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

//===, Strict data type checks
console.log("2" === 2);

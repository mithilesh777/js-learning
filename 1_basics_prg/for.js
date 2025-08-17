//for

//syntax
/*
for(let index = 0; index < array.length; i++) {
  const element = array[index];
}
*/

//example

for(let i =0; i<= 10; i++) {
    const elm = i;
    if(elm == 6) {
        console.log(`value is matched in iteration : ${elm}` )
    }
}

// nested loops

for(let i =0; i<= 3; i++) {
    console.log(`inside outer loop: ${i}`)
    for(let j = 0; j <=3; j++) {
        console.log(`inside inner loop: ${j}`)
    }
}

// loop with dynamic values, till array length
let myArr = [7,9,7,45,80,77];
for(let i =0; i<= myArr.length-1; i++) {
    console.log(`myArr index ${i} value is : ${myArr[i]}`)
}

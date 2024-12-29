let fruits = [];
fruits = ['apple', 'mango'];
fruits.push('grapes'); // push in the end of the array
console.log(fruits.length);
console.log(fruits); //[ 'apple', 'mango', 'grapes' ]
fruits.pop(); // removes the last element
console.log(fruits); //[ 'apple', 'mango' ]

let vegies = [];
vegies = ['brinjal', 'tomato', 'potato', 'pumpkeen'];
vegies.pop()
console.log(vegies); //[ 'brinjal', 'tomato', 'potato' ]

vegies.shift(); // removes the first element
console.log(vegies); //[ 'tomato', 'potato' ]

// splice

const animals = ['lion', 'beer', 'dog', 'cat'];
animals.splice(1,2,'tiger', 'ox');   // removes from index 1 and 2 elements , replaces with new 2 elements
console.log(animals); //[ 'lion', 'tiger', 'ox', 'cat' ]

//slice
const cities = ['delhi', 'punjab', 'haryana', 'himachal', 'bihar', 'up'];
const subArray = cities.slice(2);
console.log(subArray); //[ 'haryana', 'himachal', 'bihar', 'up' ]
const subArray1 = cities.slice(2,5); // end index 5 will be excluded so 2,3,4
console.log(subArray1); //[ 'haryana', 'himachal', 'bihar' ]


//concat
const fr = ['apple', 'orange', 'banana'];
let num = [1,2,3,4,5];
const combined = fr.concat(num);
console.log(combined); //[ 'apple', 'orange', 'banana', 1, 2, 3, 4, 5 ]

//include
// to validate any of the value exist

const test = ['admin', 'seller', 'vendor', 'developer'];
const result = test.includes('admin', 'vendor');
console.log(result); // true

// for-each

const n = [2,4,6,8,9,3,17];
const evenNumbers = [];
// suppose you want to make each number as even number
n.forEach((it)=>{
    evenNumbers.push(it*2);
});
console.log(evenNumbers); //[4, 8, 12, 16,18, 6, 34]
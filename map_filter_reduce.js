//map  : The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

// double the each element of the array

const numbers = [1, 2, 3, 4];
const doubledList = numbers.map((it) => {
    return it * 2;
})
console.log(doubledList); //[ 2, 4, 6, 8 ]

// or

const numbers1 = [1, 2, 3, 4];
const oddList = [];
numbers.map((it) => {
    oddList.push(it * 3);

})
console.log(oddList); //[ 3, 6, 9, 12 ]

// filter ==> The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

const numbersList = [1, 2, 3, 4];
const evenList = numbersList.filter((it) => it % 2 == 0)
console.log(evenList); //[ 2, 4 ]

// example 2 , get the students list whose marks is >=90

const students = [
    {name:'suraj', score: 95},
    {name:'adiraj', score: 82},
    {name:'abhijit', score: 74},
    {name:'niraj', score: 90},
    {name:'komal', score: 69},
    {name:'karan', score: 70},
    {name:'payal', score: 92}
]

const greaterThan90ScoreStudentList = students.filter((it)=>it.score >=90);
console.log(greaterThan90ScoreStudentList); //[{ name: 'suraj', score: 95 },{ name: 'niraj', score: 90 },{ name: 'payal', score: 92 }]

//Reduce --> The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

// reduce all the elements of an array to 1 value after doing some calculation
// e.g. get the some of all the numbers of an array and return that

const numbersList1 = [1, 2, 3, 4, 5, 6,8,9,12];

const sum = numbersList1.reduce((result,item)=>{
    return result + item;
},0)    // ==> here 0 is initial value of result 

console.log(sum); // 50
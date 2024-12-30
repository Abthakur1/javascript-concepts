//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function sum (...numbers) {
    let total = 0;
    numbers.forEach((it)=>{
        total = total + it;
    });
    return total;
}

console.log(sum(2,4,6)); //12
console.log(sum())
console.log(sum(23,5,6,8)); // 42

// first parameter fixed and rest could be anything

function multiply(multiplier, ...numbers) {
   const outputList= numbers.map((it)=>{
        return it * multiplier;
    });
    return outputList;
}

console.log(multiply(2,10,20,30)); //[ 20, 40, 60 ]
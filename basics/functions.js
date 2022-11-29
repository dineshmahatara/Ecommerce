// functions/methods/events/task
// Builtin 
// Custom

// a. Function Name 
// b. parameters 
// c. Return statement
// d. Body/ Definition
// e. Function call

// document.getElementById

function addNumbers(a, b){
    // body 
    let c = a + b;
    return c;
}
let x = 10;
let y = 20;
let result = addNumbers(x, y);
console.log(result);    // 30

let arr = [1,2,3,4,5]

// function

function addArray(a) {
    let sum = 0;
    // for(let i =0; i< a.length; i++) {
    //     sum += a[i];
    // }

    for(let b of a) {
        sum += b;
    }
    return sum
}

result = addArray(arr);


function xyz(a) {
    // a => null 
    if(typeof(a) !== "number") {
        return NaN;
    }
    // 
}
let val = null
xyz(val);   // NaN

console.log(result);    // 15

// WAP to create a function to add all the numbers present inside an array
// 

// Write a function to reverse the numbers
// e.g. input: 12345, output: 54321

let a = "12345";


let len = a.length;

// 
// 4, 0
let last_index = 4;
let reverse_str += a[last_index];

let reverse += a % 10;
a = parseInt(a / 10); // 1234


// Write a function to get the number of characters present in a word.
// e.g. input: Programming, output: {p: 1, r: 2, o: 1, g: 2, a: 1, m:2, i: 1, n:1}
let str = "Programming";

let obj = {};
obj[str[0]] += 1;
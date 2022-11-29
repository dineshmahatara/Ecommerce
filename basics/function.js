// functions, macro, methods, events, task
// function addNumbers(a,b) {
// const addNumbers = function(a,b){

// arrow functions
const addNumbers = (a, b=0) => {
    // functional scope
    let c = a + b;  // 10
    return c;
}


const user = {
    name: "Sandesh Bhattarai",
    getName: () => {
        return this.name;
    }
}

user.getName();

let numb = [1,2,3,4,5]
// 
const addArr = (numb_arr) => {
    let sum = 0;
    for(let num of numb_arr){
        sum += num;
    }
    return sum;
}
let sum_result = addArr(numb);


let result = addNumbers(10,20)
console.log(sum_result);    // 10
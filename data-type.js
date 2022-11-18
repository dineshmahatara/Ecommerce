/**
 * a. String / text
 *      "", '', ``
 * b. Numbers 
 *  integers, floating points
 * c. Boolean 
 *  true, false
 * d. Null 
 *      null, "", '', ``
 * e. Array 
 *      []
 *  - index => value 
 *  index always starts from 0
 * f. Object
 *  {}
 *  - key: value
 * g. JSON ( JavaScript based Object Notation)
 *  {}
 *  - key: value
 * h. Undefined 
 * i. NaN 
 * 
 */

let a  = "Stromg";
let b = 10;
let c = true;   // false
let d = null;   // "", '', ``
let e = [];     // new Array()
let g = new Array();
let f = {
    key: "values"
};     // new ClassName()
let h = {
    "key": "Value"
};     
let i;
let j = NaN;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)
console.log(typeof i)
console.log(typeof j)
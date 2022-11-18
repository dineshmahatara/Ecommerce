/**
 * a. Arithematic Operators 
 *      +, -, *, /, %
 * b. Concatination Operators 
 *      +, comma(,)
 * c. Increment Or decrement Operators 
 *      ++, --
 * d. Assignment Operator 
 *      =, +=, -=, *=, /=, %=
 * e. Comparision Operator 
 *      <, >, <=, >=, ==, !=, ===, !==
 * f. Logical Operators 
 *      &&, ||, !
 * g. Ternaray / Conditioonal Operator 
 *      (exp) ? true condition : false condition;
 */

let a = "10";
let b = 10;


// b 
b = b + 1;      // 10. output: 11
console.log(b); // 11
// b++;            // 12       
console.log(b++); // 11 // post assign
// ++b;            // 13
console.log(++b); // 13 // pre assign

b += 1;

let c = a + b;
// console.log("The output is: " , c); // The output is: 1010


let x = 10;
let y = '10';



console.log( x == y);   //          true
console.log( x === y);   //         false

let username = "admin";
let password = "admin123";

//
let user_username = "admin";
let user_password  = "admin123";
let role = "admin"          // admin, customer, seller

// (username === user_username) && (password === user_password)

// ( role === "admin" || role ==="customer" || role === 'seller')  // ==> true 
// ture || false || false  => true

let dob = "2022-01-01"; 

// let date_of_birth = (dob) ? dob : null; 

// dob ? getAge() : null;

// null colleacing operator
let date_of_birth =  dob ?? null; 




console.log(date_of_birth);
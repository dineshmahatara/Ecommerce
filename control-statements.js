/**
 * a. if-else
 * b. else-if
 * c. switch-case
 * d. Loop 
 *      i. while
 *      ii. For
 *      iii. For-in
 *      iV. For-of
 *      v. .map
 *      vi. .filter
 *      vii. .foreach
 */

let product = {
    name: "iPhone 12",
    price: 128000,
    discount: 0
}
// truthy value
// falsy value
    // null, empty string , 0, undefined,  false

let after_discount = product.price - product.price * product.discount/100;
product.after_discount = after_discount;
// // disoucnt 
// if(product.discount){
//     // scope of if 
//     let after_discount = product.price - product.price * product.discount/100;
//     product.after_discount = after_discount;
// }
//  else {
//     // optionnal
//     product.after_discount = product.price;
// }
// console.log(product);

let marks = 230;
let total = 500;

// percentage 
// 80 >= -> Distinction
// 60 >= && < 80 => First Division
// 45 >= && < 60 => Second Division
// 32 >= && < 45 => Third Division
// < 32 => Failed

let per = marks/total*100;
// 46   => second
// if(per >= 80){
//     console.log("Disinction")
// } else {
//     // 100 lines codes
//     // less than 80
//     if(per >=60 ) {
//         console.log("first division");
//     } else {
//         // less than 60
//         if(per >= 45) {
//             console.log("Second Division");
//         } else {
//             // less than 45
//             if(per >= 32) {
//                 console.log("Third Division")
//             } else {
//                 // less than 32
//                 console.log("Failed")
//             }
//         }
//     }
// }
if(per >= 80) {
    console.log("Distinction");
} else if(per >= 60){
    console.log("First Division");
} else if(per >= 45){
    console.log("Second Division");
} else if(per >= 32){
    console.log("Third Division");
} else {
    console.log("Failed")
}

// WAP to calculate fair of Nepal Electricity Authority
    // 0-20 => 80 rs 
    // +10 => 5
    // +20 => 6
    // +50 => 7.5
    // > => 10
    // your total units is: 200 
    // total amount to pay = ?

// WAP to calculate annual income based on the following tax brackets
    // 0-450000 => 1% tax
    // + 200000 => 15%
    // + 500000 => 20%
    // >        => 36%

    // if the annual income of a software developer is: 10000000 what will be net income 
    // after deducing the tax amount

    let day = "Sunday";
    // day => sunday-Thursday => weekday
    // Firday => Weekend
    // Saturday => Holiday
    if(day ==='Friday'){
        console.log("Weekend")
    } else if(day === 'Saturday' || day === 'Sunday') {
        console.log("Holiday");
    } else {
        console.log("Weekday")
    }

    switch(day){
        case "Friday":
            console.log("Weekend");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Holiday");
            break;
        default:
            // optional
            console.log("Weekday")
            break;  // optional
    }
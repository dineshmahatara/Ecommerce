// 100 units 

// 0-20 => rs 80
// after 20 first 10 units => 5 
// after that, next 20 => 7 
// next 30 => 10
// after that => every unit 15 

// 20   => 80
// 10   => 50
// 20   => 140
// 30   => 300
// 20   => 300
    //      870
let rates = {
    "0-20": 4,
    "20-30": 5,
    "30-50": 7,
    "50-80": 10,
    "80-0": 15
}

let unit = 100;
let total_amt = 0;
// code 
if(unit <= 20) {
    total_amt = 80;
} else if(unit <= 30) {
    // 
    total_amt = 80 + (unit-20) * 5;
} else if(unit <= 50) {
    total_amt = 80 + 10 * 5 + (unit -20-10) * 7;
} else if(unit <= 80){
    total_amt = 80 + 10 * 5 + 20 * 7 + (unit - 20 -10 -20) * 10;
} else {
    total_amt = 80 + 10 * 5 + 20 * 7 + 30 * 10 + (unit - 20 - 10 -20 -30) * 15;
}


console.log("Total amount: ", total_amt);
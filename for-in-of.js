// array 
// object 
let products = ["Test",'abc'];
let user = {};

// index value
for(let x in products){
    console.log(x); // 0,1
}

// elems
for(let x of products){
    console.log(x); // Test, abc
}
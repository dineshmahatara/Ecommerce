let products = [];      // 0

let prod_1 = {
    name: "Product One",
    price: 1000,
    discount: 10,
    brand: "Brand 1"
}
products.push(prod_1);  // last index element push 
// 0 index push
// console.log(products);
// console.log("")
let prod_2 = {
    name: "Product Two",
    price: 2000,
    discount: 5,
    brand: "Brand 2"
}
products.push(prod_2);  //  1
// console.log(products);
// console.log("")
let prod_3 = {
    name: "Product Three",
    price: 15000,
    discount: 5,
    brand: "Brand 3"
}
// 0, 1
// 0 new elem , 0 => 1 , 1 => 2
products.unshift(prod_3)    // 0 index existing 0 element pushed to 1 index
// console.log(products);
// console.log("")

let prod_4 = {
    name: "Product Four",
    price: 1200,
    discount: 15,
    brand: "Brand 1"
}
products.unshift(prod_4)
// console.log(products);
// console.log("")

let prod_5 = {
    name: "Product Five",
    price: 5000,
    discount: 15,
    brand: "Brand 1"
}
// 0 1 2 3 4
// 0 - 4
let size = products.length; // 5
// last_index = size - 1
// last_index + 1 = size 
products[size] = prod_5;
console.log(products);

// products[1] = prod_5
// console.log(products);
// console.log("")
// insert produc 1, .. prod 5

// 0 1 2 3 4 
const index_0 = products.shift();   // first
// 0 1 2 3
const last_index = products.pop();  // last index 
// 0 1 2
const index_1 = products.splice(1,1)    // index 1
// 0 1
console.log(products);
console.log("")


let supports = ["jpg", "jpeg", 'png', 'bmp', 'gif', 'svg','webp']
// 
let ext = "png";
supports.includes(ext); // true, false

// t42axf3
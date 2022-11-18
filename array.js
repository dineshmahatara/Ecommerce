// ecommerce 
// product 
// let product_name = '';
// let product_price = "";
// let product_brand = "";
// let product_category = "";
// 100

// single dimensional array
let product_1 = [
    "iPhone 12",        // 0
    120000,             // 1
    "apple",            // 2
    "smart phones"      // 3
]


// multi dimemnsional Array
let all_products = [
    [
        "iPhone 12",        // 0
        120000,             // 1
        "apple",            // 2
        "smart phones",      // 3
        [
            ["Seller", "1"],  "Seller 2"
        ]
    ],
    []
];


console.log(all_products[0][4][0][0]);  // seller

console.log(all_products[0]);   // 
console.log(all_products[1]);   // 
console.log(product_1[2])


const users = [
    {
        name: "Sandesh Bhattarai",
        address: "Kathmandu",
        phone: 9876543210,
        role: "tutor"
    },
    {
        name: "Student One",
        phone: 9876543210,
        address: "Kathmandu",
        role: "student"
    },
    {
        role: "student",
        address: "Lalitpur",
        phone: 98790654321,
        name: "Student Two"
    }
];

console.log("Name: ", users[0].name, "Address: ", users[0].address, "Phone: ", users[0].phone, "Role: ", users[0].role)
console.log("Name: ", users[1].name, "Address: ", users[1].address, "Phone: ", users[1].phone, "Role: ", users[1].role)
console.log("Name: ", users[2].name, "Address: ", users[2].address, "Phone: ", users[2].phone, "Role: ", users[2].role)


let user_1 = {
    name: "Sandesh Bhattarai",
    address: "Kathmandu",
    phone: 9876543210,
    role: "tutor"
}

user_1['name'];
user_1.name;
                    // Name 
users[0].name;        // Sandesh Bhattarai
users[1].name;        // Student One
users[2].name;        // Student Two


// WAP creating one array with atleast 5 product elements as an object
// The product object should contains, name, price, discount, brand 
// print in the following format: 
/// Name: ....... , Price: ........., Discount: ....,  Brand: ........ 
// in same line for one product 
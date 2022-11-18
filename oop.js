// protorype based
// Object class 
// 4 pillars 
// Encapsulation, Abstraction, Inheritance, Polymorphism

function User(_name, _email, _address){
    this.name = _name;      // 1234, 2345
    this.email = _email;
    this.address = _address;
}

User.prototype.getName = function(){
    return this.name;
}
// 1234
let user_obj = new User("Sandesh", "sandesh.bhattarai@broadwayinfosys.com", "Kathmandu");
// 2345
let user_obj_1 = new User("Sandesh", "sandesh.bhattarai@broadwayinfosys.com", "Kathmandu");
console.log(user_obj_1.getName()); // 2345
// user_obj.name = "Sandesh"
// user_obj.email = "sandesh.bhattarai@broadwayinfosys.com"
// user_obj.address = "Kathmandu"


// DB operation 
// CRUD => Create, Read, Update, Delete
// Product, User, Category, Order, Brand
// Brand => Create, Read, Update, Delet
// Category => CRUD
// PRODUCT => 

// phone => smartphones 

// apple, sony, samsung 
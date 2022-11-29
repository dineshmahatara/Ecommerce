// ECMA Script
// ES5, ES6
// Import and Export 
// ./ => CWD 
// ../ => one step outside
// / => Root direcotry
// ES5
// const {Login} = require("./es5");
//const AuthObj = require("./es5");

// const http = require("http");
//const login = new Login();
//const login = new AuthObj.Login();

// ES6
// package.json
// Common, module
// import Login, {Admin} from "./es6";      // default Import

// import Login, {admin_test} from "./es6";
// import Login from "./es6";

// import * as Name from "./file";
// import {Admin as AdminClass } from "./es6";   // seprate
// import  from "./es6";

// import * as Yup from "yup";

// Es6 
    // class based oop
    // Arrow function 
    // Spread and rest operator 
    // Template Literals
let user = {
    name: null,
    email: null,
    address: "Kathmandu"
}

let admin = {
    ...user,
    role: "admin",
    phone: null
}
// object destruction
// let name = admin.name;
// let email = admin.email;
// let role = admin.role;

let {name, email, role, ...rest} = admin;
let user_name = "Admin"
let not_count = 10;
// let msg = "Dear "+user_name+", You have "+not_count+" notificaiton";
let msg = `Dear ${user_name}, You have ${not_count} notificaiton`;

console.log(msg);

// Data entry 
// mongodb mongoose
// db connect

//async function wrap
    // connect
    // try {
    //     await mongoose.connect() 
    // } catch(excep) {
    //     //
    // }
    // mongoose.connect(...admin, (err, client) => {})
    // mongoose.connect().then().catch()
    // DB select 
    // ....
    // query execute
    // query response 
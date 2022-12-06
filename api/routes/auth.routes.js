const express = require("express");
const app_routes = express.Router();

const AuthController = require("../app/controller/auth.controller");
const auth_ctrl = new AuthController();
const uploader = require("../app/middleware/uploader.middleware");


app_routes.post("/login", auth_ctrl.loginUser);

app_routes.post("/register",uploader.single('image'), auth_ctrl.registerUser)

app_routes.post("/logout",(req, res, next) => {
    // login check 
    let loggedIn = true;
    if(loggedIn){
        // req.data= ""
        next();
    } else {
        next({status: 401, msg: "User not logged in"})
    }
}, auth_ctrl.logout)

module.exports= app_routes;
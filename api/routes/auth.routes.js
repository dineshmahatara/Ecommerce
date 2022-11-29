const express = require("express");
const app_routes = express.Router();

const AuthController = require("../app/controller/auth.controller");
const auth_ctrl = new AuthController();
const uploader =(req, res, next) => {
    // file uploading code 
    next();
} 

app_routes.post("/login", auth_ctrl.loginUser);

app_routes.post("/register",uploader, auth_ctrl.registerUser)

app_routes.post("/logout", auth_ctrl.logout)

module.exports= app_routes;
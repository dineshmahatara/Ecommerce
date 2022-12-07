const express = require("express");
const app_routes = express.Router();

const AuthController = require("../app/controller/auth.controller");
const auth_ctrl = new AuthController();
const uploader = require("../app/middleware/uploader.middleware");
const auth = require("../app/middleware/auth.middleware");

app_routes.post("/login", auth_ctrl.loginUser);

app_routes.post("/register",uploader.single('image'), auth_ctrl.registerUser)

app_routes.post("/logout",auth, auth_ctrl.logout)

app_routes.get("/me", auth, auth_ctrl.getLoggedInUser)

module.exports= app_routes;
const express = require("express")
const app_routes = express.Router();

const auth_routes = require("./auth.routes");
const cat_routes = require("./category.routes");
const label_routes = require("./label.routes");

// http://localhost:3005
app_routes.get("/", (req, res, next) => {
    // 
    // html 
    res.render("home")
    // res.render("home");
})



app_routes.use(auth_routes)
// http://localhost:3005/
app_routes.use("/category", cat_routes);



// register at last
app_routes.use(label_routes);
// User handl
    // CRUD
// Category 
// Product 
// Brand 
// Order 
// Payment 
// banners 

module.exports = app_routes;
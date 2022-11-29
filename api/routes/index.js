const express = require("express")
const app_routes = express();
const auth_routes = require("./auth.routes");
const cat_routes = require("./category.routes");


app_routes.use(auth_routes)
// http://localhost:3005/
app_routes.use("/category", cat_routes);


// User handl
    // CRUD
// Category 
// Product 
// Brand 
// Order 
// Payment 
// banners 

module.exports = app_routes;
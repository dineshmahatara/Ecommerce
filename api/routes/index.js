const express = require("express")
const app_routes = express.Router();

const auth_routes = require("./auth.routes");
const cat_routes = require("./category.routes");
const label_routes = require("./label.routes");
const product_routes = require("./product.routes");
const order_routes = require("./order.routes");
const user_routes = require('./user.routes');

app_routes.use(auth_routes)
app_routes.use("/category", cat_routes);
app_routes.use("/product", product_routes);
app_routes.use('/user', user_routes);
app_routes.use("/order", order_routes);



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
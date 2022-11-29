// const express = require("express");
// const exp_app = express.Router()
const exp_app = require("express").Router();
exp_app.route("/")
    .get((req, res, next) =>{

    })
    .post((req, res, next) =>{

    })



// /category/android    -> slug

// 
exp_app.put("/:id", (req, res) =>  {
    // register a category
    // accaess param 
    let id = req.params.id;

    // after ? 
    // let query = req.query.price

    console.log(id) // param 
})

// /category/electronics/mobilephones
// /category/:slug/:slug_1

exp_app.delete("/:slug", (req, res) =>  {
    // register a category
    let slug = req.params.slug;
    // let slug_1 = req.params.slug_1;
})

// edit => /category/id
// delete => /category/id


module.exports = exp_app;
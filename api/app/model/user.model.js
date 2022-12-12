const mongoose = require("mongoose");

const commonSchema = require("./common.schema");
const UserSchemaDef = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    role:{
        type: String, 
        enum: ['admin','customer','seller'],
        default: "customer"
    },
    status: {
        type: String, 
        enum:["active",'inactive'],
        default: "inactive"
    },
    // address: {
    //     shipping: AddressSchemaDef,
    //     billing: AddressSchemaDef
    // },
    address:{
        type: String, 
        default: null
    },
    image: {
        type: String
    },
    created_by: commonSchema.created_by
}, commonSchema.trigger);
const UserModel = mongoose.model("User", UserSchemaDef);
module.exports = UserModel;
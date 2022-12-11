const mongoose = require("mongoose");
const NepalData = require("../../config/nepal-data.config");
const AddressSchemaDef = new mongoose.Schema({
    
    state: {
        type: String,
        enum: NepalData.state
    },
    district: {
        type: String,
        enum: NepalData.district
    },
    municipality: {
        type: String, 
        enum: NepalData.municipality
    },
    ward: {
        type: Number, 
        min: 1,
        max: 35
    },
    location: String

})

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
    created_by: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    }
},{
    autoCreate: true,
    autoIndex: true,
    timestamps: true
});
const UserModel = mongoose.model("User", UserSchemaDef);
module.exports = UserModel;
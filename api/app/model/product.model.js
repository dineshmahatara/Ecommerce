const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const ProductSchemaDef = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    slug: {
        type: String,
        unique: true
    },  
    description: {
        type: String
    },
    category_id: [{
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: null
    }], 
    price: {
        type: Number,
        required: true, 
        min: 1
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    actual_price: {
        type: Number,
        default: 1,
        required: true,
    },
    images: [{
        type: String,
    }],
    brand: {
        type: mongoose.Types.ObjectId,
        ref: "Label",
        default: null
    },
    is_featured: {
        type: Boolean, 
        default: false
    },
    seller: commonSchema.created_by,
    status: commonSchema.statusSchema,
    created_by: commonSchema.created_by
}, commonSchema.trigger)
const ProductModel = mongoose.model("Product", ProductSchemaDef);
module.exports = ProductModel;
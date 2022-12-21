const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const OrderSchemaDef = new mongoose.Schema({
    buyer_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    cart: [{
        product_id: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        total_amt: {
            type: Number,
            required: true
        }
    }],
    sub_total: {
        type: Number,
        required: true
    },
    discount: {
        discount_type: {
            type: String,
            enum: ['percent','flat'],
            default: 'percent'
        },
        amount: {
            type: Number,
        }
    },
    service_charge: {
        type: Number
    },
    delivery_charge: {
        type: Number
    },
    vat: {
        type: Number,
    },
    total_amt: {
        type: Number
    },
    order_date: {
        type: Date
    },

    status:{
        type: String,
        enum: ['pending', "verifid", 'processing', "cancelled", "delivered"],
        default: "pending"
    },
    is_paid: {
        paid: {type: Boolean, default: false},
        mode: {type: String, enum: ['online', 'cod'], default: null},
        transaction: {type: String, default: null}
    },
    created_by: commonSchema.created_by
}, commonSchema.trigger)
const OrderModel = mongoose.model("Order", OrderSchemaDef);
module.exports = OrderModel;
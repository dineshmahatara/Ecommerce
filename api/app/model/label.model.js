const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const LabelSchemaDef = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    link: String, 
    image: {
        type: String, 
        required: true
    },
    type: {
        type: String,
        enum: ['brand','banner'],
        default: "banner"
    },
    status: commonSchema.statusSchema,
    created_by: commonSchema.created_by
}, commonSchema.trigger)
const LabelModel = mongoose.model("Label", LabelSchemaDef);
module.exports = LabelModel;
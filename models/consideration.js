const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConsiderationSchema = new Schema({

    title: {
        type: String,
        required: false,
        default: ""
    },
    paragraph: {
        type: String,
        required: false,
        default: ""
    }

}, { timestamps: true, toJSON: true }
);

ConsiderationSchema.set("toObject", { virtuals: true });
ConsiderationSchema.set("toJSON", { virtuals: true });

const Consideration = mongoose.model("Consideration", ConsiderationSchema, "Consideration");
module.exports = Consideration;
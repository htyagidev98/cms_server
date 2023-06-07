const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NumbertextSchema = new Schema({
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
NumbertextSchema.set("toObject", { virtuals: true });
NumbertextSchema.set("toJSON", { virtuals: true });

const Numbertext = mongoose.model(" Numbertext", NumbertextSchema, " Numbertext");
module.exports = Numbertext;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GreenSchema = new Schema({
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
GreenSchema.set("toObject", { virtuals: true });
GreenSchema.set("toJSON", { virtuals: true });

const Green = mongoose.model(" Green", GreenSchema, " Green");
module.exports = Green;
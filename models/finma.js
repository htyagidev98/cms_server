const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FinmaSchema = new Schema({
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
FinmaSchema.set("toObject", { virtuals: true });
FinmaSchema.set("toJSON", { virtuals: true });

const Finma = mongoose.model(" Finma", FinmaSchema, " Finma");
module.exports = Finma;
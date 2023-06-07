const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AccordSchema = new Schema({
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
AccordSchema.set("toObject", { virtuals: true });
AccordSchema.set("toJSON", { virtuals: true });

const Accord = mongoose.model(" Accord", AccordSchema, " Accord");
module.exports = Accord;
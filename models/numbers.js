const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NumbersSchema = new Schema({
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
NumbersSchema.set("toObject", { virtuals: true });
NumbersSchema.set("toJSON", { virtuals: true });

const Numbers = mongoose.model(" Numbers", NumbersSchema, " Numbers");
module.exports = Numbers;
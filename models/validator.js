const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ValidatorsSchema = new Schema({
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
ValidatorsSchema.set("toObject", { virtuals: true });
ValidatorsSchema.set("toJSON", { virtuals: true });

const Validators = mongoose.model(" Validators", ValidatorsSchema, " Validators");
module.exports = Validators;
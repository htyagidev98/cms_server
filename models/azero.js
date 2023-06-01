const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AzeroSchema = new Schema({
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
AzeroSchema.set("toObject", { virtuals: true });
AzeroSchema.set("toJSON", { virtuals: true });

const Azero = mongoose.model(" Azero", AzeroSchema, " Azero");
module.exports = Azero;
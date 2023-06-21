const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
}, { timestamps: true, toJSON: true }
);
BusinessSchema.set("toObject", { virtuals: true });
BusinessSchema.set("toJSON", { virtuals: true });

const Business = mongoose.model(" Business", BusinessSchema, " Business");
module.exports = Business;
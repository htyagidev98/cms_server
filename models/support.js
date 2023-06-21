const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SupportSchema = new Schema({
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
SupportSchema.set("toObject", { virtuals: true });
SupportSchema.set("toJSON", { virtuals: true });

const Support = mongoose.model(" Support", SupportSchema, " Support");
module.exports = Support;
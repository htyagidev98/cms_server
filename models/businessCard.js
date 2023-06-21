const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BusinessCardSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
    information: {
        type: String,
        required: false,
        default: ""
    },
    paragraph: {
        type: String,
        required: false,
        default: ""
    },
    image_url: {
        type: String,
        required: false,
        default: ""

    },
    image_id: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
BusinessCardSchema.set("toObject", { virtuals: true });
BusinessCardSchema.set("toJSON", { virtuals: true });

const BusinessCard = mongoose.model(" BusinessCard", BusinessCardSchema, " BusinessCard");
module.exports = BusinessCard;
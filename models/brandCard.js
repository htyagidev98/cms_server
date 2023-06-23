const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BrandCardSchema = new Schema({
    title: {
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
BrandCardSchema.set("toObject", { virtuals: true });
BrandCardSchema.set("toJSON", { virtuals: true });

const BrandCard = mongoose.model(" BrandCard", BrandCardSchema, " BrandCard");
module.exports = BrandCard;
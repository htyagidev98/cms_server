const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
BrandSchema.set("toObject", { virtuals: true });
BrandSchema.set("toJSON", { virtuals: true });

const Brand = mongoose.model("Brand", BrandSchema, "Brand");
module.exports = Brand;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const BuySchema = new Schema({
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
BuySchema.set("toObject", { virtuals: true });
BuySchema.set("toJSON", { virtuals: true });

const Buy = mongoose.model("Buy", BuySchema, "Buy");
module.exports = Buy;
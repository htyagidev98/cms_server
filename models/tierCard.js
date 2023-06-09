const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TierCardSchema = new Schema({

    title: {
        type: String,
        required: false,
        default: ""
    },
    content: {
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

TierCardSchema.set("toObject", { virtuals: true });
TierCardSchema.set("toJSON", { virtuals: true });

const TierCard = mongoose.model("TierCard", TierCardSchema, "TierCard");
module.exports = TierCard;
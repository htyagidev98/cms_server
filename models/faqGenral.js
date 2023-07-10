const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const FaqGenralSchema = new Schema({
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
FaqGenralSchema.set("toObject", { virtuals: true });
FaqGenralSchema.set("toJSON", { virtuals: true });

const FaqGenral = mongoose.model("FaqGenral", FaqGenralSchema, "FaqGenral");
module.exports = FaqGenral;
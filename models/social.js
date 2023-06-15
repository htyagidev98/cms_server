const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SocialSchema = new Schema({
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
SocialSchema.set("toObject", { virtuals: true });
SocialSchema.set("toJSON", { virtuals: true });

const Social = mongoose.model("Social", SocialSchema, "Social");
module.exports = Social;
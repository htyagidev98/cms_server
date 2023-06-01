const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const PrivacySchema = new Schema({
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
PrivacySchema.set("toObject", { virtuals: true });
PrivacySchema.set("toJSON", { virtuals: true });

const Privacy = mongoose.model("Privacy", PrivacySchema, "Privacy");
module.exports = Privacy;
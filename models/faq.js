const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const FaqSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""

    },
    heading: {
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
FaqSchema.set("toObject", { virtuals: true });
FaqSchema.set("toJSON", { virtuals: true });

const Faq = mongoose.model("Faq", FaqSchema, "Faq");
module.exports = Faq;
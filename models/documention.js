const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const DocumentionSchema = new Schema({
    heading: {
        type: String,
        required: false,
        default: ""

    },
    title: {
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
DocumentionSchema.set("toObject", { virtuals: true });
DocumentionSchema.set("toJSON", { virtuals: true });

const Documention = mongoose.model("Documention", DocumentionSchema, "Documention");
module.exports = Documention;
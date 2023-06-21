const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ResearchSchema = new Schema({
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
ResearchSchema.set("toObject", { virtuals: true });
ResearchSchema.set("toJSON", { virtuals: true });

const Research = mongoose.model(" Research", ResearchSchema, " Research");
module.exports = Research;
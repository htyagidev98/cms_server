const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchma = new Schema({
    date: {
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
});

const PressNewsSchema = new Schema({
    year: {
        type: String,
        required: false,
        default: ""
    },
    newsData: [NewsSchma],
}, { timestamps: true, toJSON: true });

PressNewsSchema.set("toObject", { virtuals: true });
PressNewsSchema.set("toJSON", { virtuals: true });

const PressNews = mongoose.model("PressNews", PressNewsSchema, "PressNews");
module.exports = PressNews;



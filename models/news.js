const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
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
 NewsSchema.set("toObject", { virtuals: true });
 NewsSchema.set("toJSON", { virtuals: true });

const  News = mongoose.model(" News",  NewsSchema, " News");
module.exports =  News;
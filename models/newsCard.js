const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NewsCardSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
 NewsCardSchema.set("toObject", { virtuals: true });
 NewsCardSchema.set("toJSON", { virtuals: true });

const  NewsCard = mongoose.model(" NewsCard",  NewsCardSchema, " NewsCard");
module.exports =  NewsCard;
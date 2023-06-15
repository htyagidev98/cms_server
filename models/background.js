const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BackgroundSchema = new Schema({
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
BackgroundSchema.set("toObject", { virtuals: true });
BackgroundSchema.set("toJSON", { virtuals: true });

const Background = mongoose.model(" Background", BackgroundSchema, " Background");
module.exports = Background;
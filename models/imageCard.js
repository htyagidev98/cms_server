const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ImageCardSchema = new Schema({
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
ImageCardSchema.set("toObject", { virtuals: true });
ImageCardSchema.set("toJSON", { virtuals: true });

const ImageCard = mongoose.model("ImageCard", ImageCardSchema, "ImageCard");
module.exports = ImageCard;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GalleryCardSchema = new Schema({
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
GalleryCardSchema.set("toObject", { virtuals: true });
GalleryCardSchema.set("toJSON", { virtuals: true });

const GalleryCard = mongoose.model(" GalleryCard", GalleryCardSchema, " GalleryCard");
module.exports = GalleryCard;
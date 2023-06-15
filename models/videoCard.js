const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VideoCardSchema = new Schema({
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
VideoCardSchema.set("toObject", { virtuals: true });
VideoCardSchema.set("toJSON", { virtuals: true });

const VideoCard = mongoose.model("VideoCard", VideoCardSchema, "VideoCard");
module.exports = VideoCard;
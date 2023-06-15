const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
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
VideoSchema.set("toObject", { virtuals: true });
VideoSchema.set("toJSON", { virtuals: true });

const Video = mongoose.model("Video", VideoSchema, "Video");
module.exports = Video;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MeetSchema = new Schema({
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
MeetSchema.set("toObject", { virtuals: true });
MeetSchema.set("toJSON", { virtuals: true });

const Meet= mongoose.model(" Meet", MeetSchema, " Meet");
module.exports = Meet;


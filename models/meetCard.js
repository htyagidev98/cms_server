const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MeetCardSchema = new Schema({
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
    },
    second_image_url: {
        type: String,
        required: false,
        default: ""
    },
    second_image_id: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);

MeetCardSchema.set("toObject", { virtuals: true });
MeetCardSchema.set("toJSON", { virtuals: true });

const MeetCard = mongoose.model(" MeetCard", MeetCardSchema, " MeetCard");
module.exports = MeetCard;

const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const FoundingCardSchema = new Schema({
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
    qualificaton: {
        type: String,
        required: false,
        default: ""
    },
    information: {
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
FoundingCardSchema.set("toObject", { virtuals: true });
FoundingCardSchema.set("toJSON", { virtuals: true });

const FoundingCard = mongoose.model("FoundingCard", FoundingCardSchema, "FoundingCard");
module.exports = FoundingCard;
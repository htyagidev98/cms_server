const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CardinalCardSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
    information: {
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
CardinalCardSchema.set("toObject", { virtuals: true });
CardinalCardSchema.set("toJSON", { virtuals: true });

const CardinalCard = mongoose.model(" CardinalCard", CardinalCardSchema, " CardinalCard");
module.exports = CardinalCard;
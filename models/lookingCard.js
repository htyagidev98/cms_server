const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LookingCardSchema = new Schema({
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
LookingCardSchema.set("toObject", { virtuals: true });
LookingCardSchema.set("toJSON", { virtuals: true });

const LookingCard = mongoose.model(" LookingCard", LookingCardSchema, " LookingCard");
module.exports = LookingCard;
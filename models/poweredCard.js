const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PoweredCardSchema = new Schema({
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
PoweredCardSchema.set("toObject", { virtuals: true });
PoweredCardSchema.set("toJSON", { virtuals: true });

const PoweredCard = mongoose.model(" PoweredCard", PoweredCardSchema, " PoweredCard");
module.exports = PoweredCard;
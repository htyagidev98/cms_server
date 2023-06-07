const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PurposeCardSchema = new Schema({
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
PurposeCardSchema.set("toObject", { virtuals: true });
PurposeCardSchema.set("toJSON", { virtuals: true });

const PurposeCard = mongoose.model(" PurposeCard", PurposeCardSchema, " PurposeCard");
module.exports = PurposeCard;
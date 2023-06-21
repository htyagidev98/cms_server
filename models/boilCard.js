const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BoilCardSchema = new Schema({
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
BoilCardSchema.set("toObject", { virtuals: true });
BoilCardSchema.set("toJSON", { virtuals: true });

const BoilCard = mongoose.model(" BoilCard", BoilCardSchema, " BoilCard");
module.exports = BoilCard;
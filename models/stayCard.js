const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StayCardSchema = new Schema({
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
StayCardSchema.set("toObject", { virtuals: true });
StayCardSchema.set("toJSON", { virtuals: true });

const StayCard = mongoose.model("StayCard", StayCardSchema, "StayCard");
module.exports = StayCard;
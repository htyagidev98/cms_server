const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProcessCardSchema = new Schema({
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
ProcessCardSchema.set("toObject", { virtuals: true });
ProcessCardSchema.set("toJSON", { virtuals: true });

const ProcessCard = mongoose.model(" ProcessCard", ProcessCardSchema, " ProcessCard");
module.exports = ProcessCard;
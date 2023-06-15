const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AdditionalCardSchema = new Schema({
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
AdditionalCardSchema.set("toObject", { virtuals: true });
AdditionalCardSchema.set("toJSON", { virtuals: true });

const AdditionalCard = mongoose.model(" AdditionalCard", AdditionalCardSchema, " AdditionalCard");
module.exports = AdditionalCard;
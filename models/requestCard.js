const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RequestCardSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
RequestCardSchema.set("toObject", { virtuals: true });
RequestCardSchema.set("toJSON", { virtuals: true });

const RequestCard = mongoose.model(" RequestCard", RequestCardSchema, " RequestCard");
module.exports = RequestCard;
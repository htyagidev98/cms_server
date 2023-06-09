const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AvailableSchema = new Schema({

    title: {
        type: String,
        required: false,
        default: ""
    },
    content: {
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

AvailableSchema.set("toObject", { virtuals: true });
AvailableSchema.set("toJSON", { virtuals: true });

const Available = mongoose.model("Available", AvailableSchema, "Available");
module.exports = Available;
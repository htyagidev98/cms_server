const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
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
RequestSchema.set("toObject", { virtuals: true });
RequestSchema.set("toJSON", { virtuals: true });

const Request = mongoose.model(" Request", RequestSchema, " Request");
module.exports = Request;
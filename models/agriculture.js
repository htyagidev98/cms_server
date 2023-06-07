const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AgricultureSchema = new Schema({
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
AgricultureSchema.set("toObject", { virtuals: true });
AgricultureSchema.set("toJSON", { virtuals: true });

const Agriculture = mongoose.model(" Agriculture", AgricultureSchema, " Agriculture");
module.exports = Agriculture;
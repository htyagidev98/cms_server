const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PurposeSchema = new Schema({
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
PurposeSchema.set("toObject", { virtuals: true });
PurposeSchema.set("toJSON", { virtuals: true });

const Purpose = mongoose.model(" Purpose", PurposeSchema, " Purpose");
module.exports = Purpose;
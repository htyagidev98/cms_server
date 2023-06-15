const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AdditionalSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
AdditionalSchema.set("toObject", { virtuals: true });
AdditionalSchema.set("toJSON", { virtuals: true });

const Additional = mongoose.model("Additional", AdditionalSchema, "Additional");
module.exports = Additional;
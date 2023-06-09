const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FootprintSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
FootprintSchema.set("toObject", { virtuals: true });
FootprintSchema.set("toJSON", { virtuals: true });

const Footprint = mongoose.model("Footprint", FootprintSchema, "Footprint");
module.exports = Footprint;
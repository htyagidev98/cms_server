const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PlatformsSchema = new Schema({
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
PlatformsSchema.set("toObject", { virtuals: true });
PlatformsSchema.set("toJSON", { virtuals: true });

const Platforms = mongoose.model("Platforms", PlatformsSchema, "Platforms");
module.exports = Platforms;
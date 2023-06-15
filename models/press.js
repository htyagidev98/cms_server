const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const PressSchema = new Schema({
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
PressSchema.set("toObject", { virtuals: true });
PressSchema.set("toJSON", { virtuals: true });

const Press = mongoose.model("Press", PressSchema, "Press");
module.exports = Press;
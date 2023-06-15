const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TutorialSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
TutorialSchema.set("toObject", { virtuals: true });
TutorialSchema.set("toJSON", { virtuals: true });

const Tutorial = mongoose.model("Tutorial", TutorialSchema, "Tutorial");
module.exports = Tutorial;
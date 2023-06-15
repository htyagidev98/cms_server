const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StaySchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
StaySchema.set("toObject", { virtuals: true });
StaySchema.set("toJSON", { virtuals: true });

const Stay = mongoose.model("Stay", StaySchema, "Stay");
module.exports = Stay;
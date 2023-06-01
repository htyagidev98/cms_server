const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UtilitySchema = new Schema({
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
UtilitySchema.set("toObject", { virtuals: true });
UtilitySchema.set("toJSON", { virtuals: true });

const Utility = mongoose.model("Utility", UtilitySchema, "Utility");
module.exports = Utility;
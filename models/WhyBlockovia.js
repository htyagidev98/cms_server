const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const BlockoviaSchema = new Schema({
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
BlockoviaSchema.set("toObject", { virtuals: true });
BlockoviaSchema.set("toJSON", { virtuals: true });

const Blockovia = mongoose.model("Blockovia", BlockoviaSchema, "Blockovia");
module.exports = Blockovia;
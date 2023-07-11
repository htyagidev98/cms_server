const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const EconomySchema = new Schema({
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
EconomySchema.set("toObject", { virtuals: true });
EconomySchema.set("toJSON", { virtuals: true });

const Economy = mongoose.model("Economy", EconomySchema, "Economy");
module.exports = Economy;
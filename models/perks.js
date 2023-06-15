const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PerksSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
PerksSchema.set("toObject", { virtuals: true });
PerksSchema.set("toJSON", { virtuals: true });

const Perks = mongoose.model(" Perks", PerksSchema, " Perks");
module.exports = Perks;
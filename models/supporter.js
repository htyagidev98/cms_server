const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SupporterSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
SupporterSchema.set("toObject", { virtuals: true });
SupporterSchema.set("toJSON", { virtuals: true });

const Supporter = mongoose.model(" Supporter", SupporterSchema, " Supporter");
module.exports = Supporter;
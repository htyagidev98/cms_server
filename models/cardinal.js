const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CardinalSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
}, { timestamps: true, toJSON: true }
);
CardinalSchema.set("toObject", { virtuals: true });
CardinalSchema.set("toJSON", { virtuals: true });

const Cardinal = mongoose.model(" Cardinal", CardinalSchema, " Cardinal");
module.exports = Cardinal;
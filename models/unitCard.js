const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UnitsSchema = new Schema({
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
UnitsSchema.set("toObject", { virtuals: true });
UnitsSchema.set("toJSON", { virtuals: true });

const Units = mongoose.model(" Units", UnitsSchema, " Units");
module.exports = Units;
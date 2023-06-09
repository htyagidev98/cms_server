const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CarbonSchema = new Schema({
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
CarbonSchema.set("toObject", { virtuals: true });
CarbonSchema.set("toJSON", { virtuals: true });

const Carbon = mongoose.model(" Carbon", CarbonSchema, " Carbon");
module.exports = Carbon;
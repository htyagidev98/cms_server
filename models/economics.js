const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EconomicsSchema = new Schema({
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
EconomicsSchema.set("toObject", { virtuals: true });
EconomicsSchema.set("toJSON", { virtuals: true });

const Economics = mongoose.model(" Economics", EconomicsSchema, " Economics");
module.exports = Economics;
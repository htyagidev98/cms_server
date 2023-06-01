const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CasesSchema = new Schema({
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
CasesSchema.set("toObject", { virtuals: true });
CasesSchema.set("toJSON", { virtuals: true });

const Cases = mongoose.model(" Cases", CasesSchema, " Cases");
module.exports = Cases;
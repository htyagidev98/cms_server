const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FundingSchema = new Schema({
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
FundingSchema.set("toObject", { virtuals: true });
FundingSchema.set("toJSON", { virtuals: true });

const Funding = mongoose.model(" Funding", FundingSchema, " Funding");
module.exports = Funding;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FundingNewSchema = new Schema({
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
FundingNewSchema.set("toObject", { virtuals: true });
FundingNewSchema.set("toJSON", { virtuals: true });

const FundingNew = mongoose.model(" FundingNew", FundingNewSchema, " FundingNew");
module.exports = FundingNew;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const InvestorsSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
InvestorsSchema.set("toObject", { virtuals: true });
InvestorsSchema.set("toJSON", { virtuals: true });

const Investors = mongoose.model("Investors", InvestorsSchema, "Investors");
module.exports = Investors;
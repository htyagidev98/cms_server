const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BountySchema = new Schema({
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
BountySchema.set("toObject", { virtuals: true });
BountySchema.set("toJSON", { virtuals: true });

const Bounty = mongoose.model(" Bounty", BountySchema, " Bounty");
module.exports = Bounty;
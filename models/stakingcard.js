const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StakingCardSchema = new Schema({
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
StakingCardSchema.set("toObject", { virtuals: true });
StakingCardSchema.set("toJSON", { virtuals: true });

const StakingCard = mongoose.model(" StakingCard", StakingCardSchema, " StakingCard");
module.exports = StakingCard;
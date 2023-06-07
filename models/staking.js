const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const StakingSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
    paragraph: {
        type: String,
        required: false,
        default: ""
    },
}, { timestamps: true, toJSON: true }
);
 StakingSchema.set("toObject", { virtuals: true });
 StakingSchema.set("toJSON", { virtuals: true });

const  Staking = mongoose.model(" Staking", StakingSchema, " Staking");
module.exports = Staking;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StakingValidatorSchema = new Schema({
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
StakingValidatorSchema.set("toObject", { virtuals: true });
StakingValidatorSchema.set("toJSON", { virtuals: true });

const StakingValidator = mongoose.model(" StakingValidator", StakingValidatorSchema, " StakingValidator");
module.exports = StakingValidator;
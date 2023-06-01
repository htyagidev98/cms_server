const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MechanismSchema = new Schema({
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
MechanismSchema.set("toObject", { virtuals: true });
MechanismSchema.set("toJSON", { virtuals: true });

const Mechanism = mongoose.model(" Mechanism", MechanismSchema, " Mechanism");
module.exports = Mechanism;
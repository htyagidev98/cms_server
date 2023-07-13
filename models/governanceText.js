const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GovernanceTextSchema = new Schema({
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
GovernanceTextSchema.set("toObject", { virtuals: true });
GovernanceTextSchema.set("toJSON", { virtuals: true });

const GovernanceText = mongoose.model(" GovernanceText", GovernanceTextSchema, " GovernanceText");
module.exports = GovernanceText;
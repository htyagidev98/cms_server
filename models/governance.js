const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GovernanceSchema = new Schema({
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
    image_url: {
        type: String,
        required: false,
        default: ""

    },
    image_id: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
GovernanceSchema.set("toObject", { virtuals: true });
GovernanceSchema.set("toJSON", { virtuals: true });

const Governance = mongoose.model(" Governance", GovernanceSchema, " Governance");
module.exports = Governance;
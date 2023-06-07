const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EcosystemCardSchema = new Schema({
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
EcosystemCardSchema.set("toObject", { virtuals: true });
EcosystemCardSchema.set("toJSON", { virtuals: true });

const EcosystemCard = mongoose.model(" EcosystemCard", EcosystemCardSchema, " EcosystemCard");
module.exports = EcosystemCard;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const FaqEcosystemSchema = new Schema({
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
FaqEcosystemSchema.set("toObject", { virtuals: true });
FaqEcosystemSchema.set("toJSON", { virtuals: true });

const FaqEcosystem = mongoose.model("FaqEcosystem", FaqEcosystemSchema, "FaqEcosystem");
module.exports = FaqEcosystem;
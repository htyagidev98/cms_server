const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GlossarySchema = new Schema({
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
GlossarySchema.set("toObject", { virtuals: true });
GlossarySchema.set("toJSON", { virtuals: true });

const Glossary = mongoose.model(" Glossary", GlossarySchema, " Glossary");
module.exports = Glossary;
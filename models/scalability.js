const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ScalabilitySchema = new Schema({
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
ScalabilitySchema.set("toObject", { virtuals: true });
ScalabilitySchema.set("toJSON", { virtuals: true });

const Scalability = mongoose.model("Scalability", ScalabilitySchema, "Scalability");
module.exports = Scalability;
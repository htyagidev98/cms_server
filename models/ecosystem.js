const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const EcosystemSchema = new Schema({
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
 EcosystemSchema.set("toObject", { virtuals: true });
 EcosystemSchema.set("toJSON", { virtuals: true });

const  Ecosystem = mongoose.model(" Ecosystem", EcosystemSchema, " Ecosystem");
module.exports = Ecosystem;
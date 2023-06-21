const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BoilerplatesSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
BoilerplatesSchema.set("toObject", { virtuals: true });
BoilerplatesSchema.set("toJSON", { virtuals: true });

const Boilerplates = mongoose.model(" Boilerplates", BoilerplatesSchema, " Boilerplates");
module.exports = Boilerplates;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RequireSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
RequireSchema.set("toObject", { virtuals: true });
RequireSchema.set("toJSON", { virtuals: true });

const Require = mongoose.model(" Require", RequireSchema, " Require");
module.exports = Require;
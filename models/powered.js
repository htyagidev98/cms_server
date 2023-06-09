const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PoweredSchema = new Schema({
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
PoweredSchema.set("toObject", { virtuals: true });
PoweredSchema.set("toJSON", { virtuals: true });

const Powered = mongoose.model(" Powered", PoweredSchema, " Powered");
module.exports = Powered;
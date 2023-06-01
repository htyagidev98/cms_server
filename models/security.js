const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const SecuritySchema = new Schema({
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
SecuritySchema.set("toObject", { virtuals: true });
SecuritySchema.set("toJSON", { virtuals: true });

const Security = mongoose.model("Security", SecuritySchema, "Security");
module.exports = Security;
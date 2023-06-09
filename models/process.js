const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProcessSchema = new Schema({
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
ProcessSchema.set("toObject", { virtuals: true });
ProcessSchema.set("toJSON", { virtuals: true });

const Process = mongoose.model(" Process", ProcessSchema, " Process");
module.exports = Process;
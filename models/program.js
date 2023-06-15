const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
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
ProgramSchema.set("toObject", { virtuals: true });
ProgramSchema.set("toJSON", { virtuals: true });

const Program = mongoose.model(" Program", ProgramSchema, " Program");
module.exports = Program;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AmbassadorProgramSchema = new Schema({
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
AmbassadorProgramSchema.set("toObject", { virtuals: true });
AmbassadorProgramSchema.set("toJSON", { virtuals: true });

const AmbassadorProgram = mongoose.model(" AmbassadorProgram", AmbassadorProgramSchema, " AmbassadorProgram");
module.exports = AmbassadorProgram;
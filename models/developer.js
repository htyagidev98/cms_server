const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
DeveloperSchema.set("toObject", { virtuals: true });
DeveloperSchema.set("toJSON", { virtuals: true });

const Developer = mongoose.model("Developer", DeveloperSchema, "Developer");
module.exports = Developer;
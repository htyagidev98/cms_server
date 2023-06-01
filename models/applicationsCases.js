const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ApplicationsSchema = new Schema({
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
ApplicationsSchema.set("toObject", { virtuals: true });
ApplicationsSchema.set("toJSON", { virtuals: true });

const Applications = mongoose.model(" Applications", ApplicationsSchema, " Applications");
module.exports = Applications;
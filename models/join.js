const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const JoinSchema = new Schema({
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
JoinSchema.set("toObject", { virtuals: true });
JoinSchema.set("toJSON", { virtuals: true });

const Join = mongoose.model(" Join", JoinSchema, " Join");
module.exports = Join;
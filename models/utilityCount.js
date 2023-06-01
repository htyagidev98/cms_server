const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CountSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
    content: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
 CountSchema.set("toObject", { virtuals: true });
 CountSchema.set("toJSON", { virtuals: true });

const  Count = mongoose.model(" Count",  CountSchema, " Count");
module.exports =  Count;
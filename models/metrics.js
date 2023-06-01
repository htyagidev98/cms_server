const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MetricsSchema = new Schema({
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
 MetricsSchema.set("toObject", { virtuals: true });
 MetricsSchema.set("toJSON", { virtuals: true });

const  Metrics = mongoose.model(" Metrics",  MetricsSchema, " Metrics");
module.exports =  Metrics;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MeetCountSchema = new Schema({
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
 MeetCountSchema.set("toObject", { virtuals: true });
 MeetCountSchema.set("toJSON", { virtuals: true });

const  MeetCount = mongoose.model(" MeetCount",  MeetCountSchema, " MeetCount");
module.exports =  MeetCount;
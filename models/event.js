const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const EventSchema = new Schema({
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
EventSchema.set("toObject", { virtuals: true });
EventSchema.set("toJSON", { virtuals: true });

const Event = mongoose.model("Event", EventSchema, "Event");
module.exports = Event;
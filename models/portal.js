const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PortalSchema = new Schema({
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
PortalSchema.set("toObject", { virtuals: true });
PortalSchema.set("toJSON", { virtuals: true });

const Portal = mongoose.model(" Portal", PortalSchema, " Portal");
module.exports = Portal;
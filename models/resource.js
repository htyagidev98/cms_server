const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
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
ResourceSchema.set("toObject", { virtuals: true });
ResourceSchema.set("toJSON", { virtuals: true });

const Resource = mongoose.model(" Resource", ResourceSchema, " Resource");
module.exports = Resource;
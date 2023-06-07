const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ResourceCardSchema = new Schema({
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
ResourceCardSchema.set("toObject", { virtuals: true });
ResourceCardSchema.set("toJSON", { virtuals: true });

const ResourceCard = mongoose.model(" ResourceCard", ResourceCardSchema, " ResourceCard");
module.exports = ResourceCard;
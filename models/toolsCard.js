const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ToolCardSchema = new Schema({
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
ToolCardSchema.set("toObject", { virtuals: true });
ToolCardSchema.set("toJSON", { virtuals: true });

const ToolCard = mongoose.model("ToolCard", ToolCardSchema, "ToolCard");
module.exports = ToolCard;
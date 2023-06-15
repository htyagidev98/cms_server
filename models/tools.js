const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
ToolSchema.set("toObject", { virtuals: true });
ToolSchema.set("toJSON", { virtuals: true });

const Tool = mongoose.model("Tool", ToolSchema, "Tool");
module.exports = Tool;
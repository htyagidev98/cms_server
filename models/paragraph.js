const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ParagraphSchema = new Schema({
    paragraph: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
ParagraphSchema.set("toObject", { virtuals: true });
ParagraphSchema.set("toJSON", { virtuals: true });

const Paragraph = mongoose.model("Paragraph", ParagraphSchema, "Paragraph");
module.exports = Paragraph;
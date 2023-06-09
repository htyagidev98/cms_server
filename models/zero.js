const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ZeroSchema = new Schema({
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
ZeroSchema.set("toObject", { virtuals: true });
ZeroSchema.set("toJSON", { virtuals: true });

const Zero = mongoose.model(" Zero", ZeroSchema, " Zero");
module.exports = Zero;
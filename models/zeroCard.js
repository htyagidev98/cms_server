const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ZeroCardSchema = new Schema({
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
ZeroCardSchema.set("toObject", { virtuals: true });
ZeroCardSchema.set("toJSON", { virtuals: true });

const ZeroCard = mongoose.model(" ZeroCard", ZeroCardSchema, " ZeroCard");
module.exports = ZeroCard;
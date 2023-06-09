const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const CriteriaCardSchema = new Schema({
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
CriteriaCardSchema.set("toObject", { virtuals: true });
CriteriaCardSchema.set("toJSON", { virtuals: true });

const CriteriaCard = mongoose.model("CriteriaCard", CriteriaCardSchema, "CriteriaCard");
module.exports = CriteriaCard;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const SupporterCardSchema = new Schema({
  
    paragraph: {
        type: String,
        required: false,
        default: ""
    },
    image_url: {
        type: String,
        required: false,
        default: ""

    },
    image_id: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
SupporterCardSchema.set("toObject", { virtuals: true });
SupporterCardSchema.set("toJSON", { virtuals: true });

const SupporterCard = mongoose.model("SupporterCard", SupporterCardSchema, "SupporterCard");
module.exports = SupporterCard;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const InvestorsCardSchema = new Schema({
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
InvestorsCardSchema.set("toObject", { virtuals: true });
InvestorsCardSchema.set("toJSON", { virtuals: true });

const InvestorsCard = mongoose.model("InvestorsCard", InvestorsCardSchema, "InvestorsCard");
module.exports = InvestorsCard;
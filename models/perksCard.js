const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PerksCardSchema = new Schema({
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
PerksCardSchema.set("toObject", { virtuals: true });
PerksCardSchema.set("toJSON", { virtuals: true });

const PerksCard = mongoose.model(" PerksCard", PerksCardSchema, " PerksCard");
module.exports = PerksCard;



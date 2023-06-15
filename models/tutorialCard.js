const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TutorialCardSchema = new Schema({
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
TutorialCardSchema.set("toObject", { virtuals: true });
TutorialCardSchema.set("toJSON", { virtuals: true });

const TutorialCard = mongoose.model("TutorialCard", TutorialCardSchema, "TutorialCard");
module.exports = TutorialCard;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommunityFaqSchema = new Schema({
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
CommunityFaqSchema.set("toObject", { virtuals: true });
CommunityFaqSchema.set("toJSON", { virtuals: true });

const CommunityFaq = mongoose.model(" CommunityFaq", CommunityFaqSchema, " CommunityFaq");
module.exports = CommunityFaq;
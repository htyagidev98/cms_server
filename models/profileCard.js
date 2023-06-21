const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProfileCardSchema = new Schema({
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
ProfileCardSchema.set("toObject", { virtuals: true });
ProfileCardSchema.set("toJSON", { virtuals: true });

const ProfileCard = mongoose.model(" ProfileCard", ProfileCardSchema, " ProfileCard");
module.exports = ProfileCard;
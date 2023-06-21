const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AdvisorsCardSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
    paragraph: {
        type: String,
        required: false,
        default: ""
    },
    qualificaton: {
        type: String,
        required: false,
        default: ""
    },
    information: {
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
AdvisorsCardSchema.set("toObject", { virtuals: true });
AdvisorsCardSchema.set("toJSON", { virtuals: true });

const AdvisorsCard = mongoose.model(" AdvisorsCard", AdvisorsCardSchema, " AdvisorsCard");
module.exports = AdvisorsCard;
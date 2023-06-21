const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AdvisorsSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    },
}, { timestamps: true, toJSON: true }
);
AdvisorsSchema.set("toObject", { virtuals: true });
AdvisorsSchema.set("toJSON", { virtuals: true });

const Advisors = mongoose.model(" Advisors", AdvisorsSchema, " Advisors");
module.exports = Advisors;
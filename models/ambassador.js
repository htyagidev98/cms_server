const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AmbassadorSchema = new Schema({
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
AmbassadorSchema.set("toObject", { virtuals: true });
AmbassadorSchema.set("toJSON", { virtuals: true });

const Ambassador = mongoose.model(" Ambassador", AmbassadorSchema, " Ambassador");
module.exports = Ambassador;
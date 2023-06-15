const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LookingSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
LookingSchema.set("toObject", { virtuals: true });
LookingSchema.set("toJSON", { virtuals: true });

const Looking = mongoose.model(" Looking", LookingSchema, " Looking");
module.exports = Looking;
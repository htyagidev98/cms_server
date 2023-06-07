const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NominatorSchema = new Schema({
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
NominatorSchema.set("toObject", { virtuals: true });
NominatorSchema.set("toJSON", { virtuals: true });

const Nominator = mongoose.model(" Nominator", NominatorSchema, " Nominator");
module.exports = Nominator;
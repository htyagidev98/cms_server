const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FoundingSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
FoundingSchema.set("toObject", { virtuals: true });
FoundingSchema.set("toJSON", { virtuals: true });

const Founding = mongoose.model("Founding", FoundingSchema, "Founding");
module.exports = Founding;
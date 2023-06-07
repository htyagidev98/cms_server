const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const SecureSchema = new Schema({
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
}, { timestamps: true, toJSON: true }
);
SecureSchema.set("toObject", { virtuals: true });
SecureSchema.set("toJSON", { virtuals: true });

const Secure = mongoose.model("Secure",SecureSchema, "Secure");
module.exports =Secure;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RequireCardSchema = new Schema({
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
RequireCardSchema.set("toObject", { virtuals: true });
RequireCardSchema.set("toJSON", { virtuals: true });

const RequireCard = mongoose.model(" RequireCard", RequireCardSchema, " RequireCard");
module.exports = RequireCard;



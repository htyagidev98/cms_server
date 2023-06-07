const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ActionsSchema = new Schema({
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
ActionsSchema.set("toObject", { virtuals: true });
ActionsSchema.set("toJSON", { virtuals: true });

const Actions = mongoose.model(" Actions", ActionsSchema, " Actions");
module.exports = Actions;
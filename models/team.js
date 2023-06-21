const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const TeamSchema = new Schema({
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
TeamSchema.set("toObject", { virtuals: true });
TeamSchema.set("toJSON", { virtuals: true });

const Team = mongoose.model("Team", TeamSchema, "Team");
module.exports = Team;
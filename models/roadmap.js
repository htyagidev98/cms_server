const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoadmapSchema = new Schema({
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
}, { timestamps: true, toJSON: true });

RoadmapSchema.set("toObject", { virtuals: true });
RoadmapSchema.set("toJSON", { virtuals: true });

const Roadmap = mongoose.model("Roadmap", RoadmapSchema, "Roadmap");
module.exports = Roadmap;



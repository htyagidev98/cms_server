const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ConsensusSchema = new Schema({
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
ConsensusSchema.set("toObject", { virtuals: true });
ConsensusSchema.set("toJSON", { virtuals: true });

const Consensus = mongoose.model("Consensus", ConsensusSchema, "Consensus");
module.exports = Consensus;
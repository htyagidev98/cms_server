const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ProfileSchema = new Schema({
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
ProfileSchema.set("toObject", { virtuals: true });
ProfileSchema.set("toJSON", { virtuals: true });

const Profile = mongoose.model("Profile", ProfileSchema, "Profile");
module.exports = Profile;
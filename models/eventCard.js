const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EventCardSchema = new Schema({
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
    image_url: {
        type: String,
        required: false,
        default: ""

    },
    image_id: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true, toJSON: true }
);
EventCardSchema.set("toObject", { virtuals: true });
EventCardSchema.set("toJSON", { virtuals: true });

const EventCard = mongoose.model(" EventCard", EventCardSchema, " EventCard");
module.exports = EventCard;








// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

// const EventCardSchema = new Schema({
//     title: {
//         type: String,
//         required: false,
//         default: ""
//     },
//     paragraph: {
//         type: String,
//         required: false,
//         default: ""
//     }
// }, { timestamps: true, toJSON: true }
// );
// EventCardSchema.set("toObject", { virtuals: true });
// EventCardSchema.set("toJSON", { virtuals: true });

// const EventCard = mongoose.model(" EventCard", EventCardSchema, " EventCard");
// module.exports = EventCard;
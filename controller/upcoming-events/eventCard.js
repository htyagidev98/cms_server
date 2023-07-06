const EventCard = require('../../models/eventCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('../../utils/cloudinary')

exports.eventCardAdd = async (req, res, images) => {
    try {
    const rules = { title: "required", paragraph: "required" };
    var validation = new Validator(req.body, rules);
    if (validation.fails()) {
        return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
    } else {
        const { title, paragraph, } = req.body;
        let eventData = await EventCard.findOne({ title: title }).lean();
        if (!eventData) {
            let result = await cloudinary.uploader.upload(req.file.path, {
                images,
                overwrite: true,
                faces: false,
            });
            let data = await EventCard.create({
                title: title,
                paragraph: paragraph,
                image_url: result.secure_url,
                image_id: result.public_id
            });
            return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
        } else {
            return res.status(403).json({ responseMessage: "title Exist", responseData: {} })
        }
    }
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })

    }
}

exports.eventCardGet = async (req, res) => {
    try {
        const contentlist = await EventCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let cardData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph,
                    image_url: content.image_url,
                    image_id: content.image_id
                };
                cardData.push(contentObj);
            });

            return res.status(200).json({ responseMessage: "Successfully", responseData: cardData });
        } else {
            return res.status(200).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.eventCardUpdate = async (req, res, images) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        const validation = new Validator(req.body, rules);

        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error",
                responseData: validation.errors.all(),
            });
        } else {
            const { title, paragraph } = req.body;
            const { _id } = req.query;
            let eventData = await EventCard.findById(_id).lean();
            if (!eventData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                let updatedData = {
                    title: title,
                    paragraph: paragraph,
                };
                if (req.file) {
                    const result = await cloudinary.uploader.upload(req.file.path, {
                        images,
                        overwrite: true,
                        faces: false,
                    });
                    updatedData.image_url = result.secure_url;
                    updatedData.image_id = result.public_id;
                }
                const data = await EventCard.findByIdAndUpdate({ _id: eventData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};

exports.eventCardDelete = async (req, res) => {
    try {
        const { _id } = req.query;
        let eventData = await EventCard.findById(_id).lean();
        if (eventData) {
            await EventCard.findByIdAndDelete({ _id: eventData._id }, eventData, { new: true });
            return res.status(200).json({ responseMessage: "Deleted Successfully ", responseData: {} });
        } else {
            return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


















// const EventCard = require('../../models/eventCard')
// bodyParser = require("body-parser")
// Validator = require("validatorjs")

// exports.eventCardAdd = async (req, res) => {
//     try {
//         const rules = { title: "required", paragraph: "required" };
//         var validation = new Validator(req.body, rules);
//         if (validation.fails()) {
//             return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
//         } else {
//             const { title,paragraph } = req.body;
//             let eventData = await EventCard.findOne({ title: title }).lean();
//             if (!eventData) {
//                 let data = await EventCard.create({
//                     title: title,
//                     paragraph:paragraph
//                 });
//                 return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
//             } else {
//                 return res.status(403).json({ responseMessage: "title Exist", responseData: {} })
//             }
//         }
//     } catch (err) {
//         return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })

//     }
// }

// exports.eventCardGet = async (req, res) => {
//     try {
//         const contentlist = await EventCard.find().sort({ createdAt: 1 });
//         if (contentlist && contentlist.length > 0) {
//             let eventData = []
//             contentlist.forEach(content => {
//                 const contentObj = {
//                     _id: content._id,
//                     title: content.title,
//                     paragraph:content.paragraph
//                 };
//                 eventData.push(contentObj);
//             })

//             return res.status(200).json({ responseMessage: "Successfully", responseData: eventData });
//         } else {
//             return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
//         };
//     } catch (err) {
//         return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
//     }
// };

// exports.eventCardUpdate = async (req, res) => {
//     try {
//         const rules = { title: "required", paragraph: "required" };
//         const validation = new Validator(req.body, rules);

//         if (validation.fails()) {
//             return res.status(422).json({
//                 responseMessage: "Validation Error", responseData: validation.errors.all(),
//             });
//         } else {
//             const { title, paragraph } = req.body;
//             const { _id } = req.query;
//             let eventData = await EventCard.findById(_id).lean();
//             if (!eventData) {
//                 return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
//             } else {
//                 const updatedData = {
//                     title: title,
//                     paragraph: paragraph
//                 };
//                 const data = await EventCard.findByIdAndUpdate({ _id: eventData._id }, updatedData, { new: true });

//                 return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
//             }
//         }
//     } catch (err) {
//         return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
//     }
// };


const ImageCard = require('../../models/imageCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('../../utils/cloudinary')

exports.imageCardAdd = async (req, res, images) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph, } = req.body;
            let imageData = await ImageCard.findOne({ title: title }).lean();
            if (!imageData) {
                let result = await cloudinary.uploader.upload(req.file.path, {
                    images,
                    overwrite: true,
                    faces: false,
                });
                let data = await ImageCard.create({
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

exports.imageCardGet = async (req, res) => {
    try {
        const contentlist = await ImageCard.find().sort({ createdAt: 1 });
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


exports.imageCardUpdate = async (req, res, images) => {
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
            let imageData = await ImageCard.findById(_id).lean();
            if (!imageData) {
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
                const data = await ImageCard.findByIdAndUpdate({ _id: imageData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


exports.imageCardDelete = async (req, res) => {
    try {
        const { _id } = req.query;
        let imageData = await ImageCard.findById(_id).lean();
        if (imageData) {
            await ImageCard.findByIdAndDelete({ _id: imageData._id }, imageData, { new: true });
            return res.status(200).json({ responseMessage: "Deleted Successfully ", responseData: {} });
        } else {
            return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};




const BusinessCard = require('../../models/businessCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dp6aceayp',
    api_key: '925825434622849',
    api_secret: 'uTuU6iIGtleSOIbtZDO_x5hPErc'
});

exports.businessCardAdd = async (req, res, images) => {
    try {
        const rules = { title: "required", paragraph: "required", information: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph, information } = req.body;
            let businessData = await BusinessCard.findOne({ title: title }).lean();
            if (!businessData) {
                let result = await cloudinary.uploader.upload(req.file.path, {
                    images,
                    overwrite: true,
                    faces: false,
                });
                let data = await BusinessCard.create({
                    title: title,
                    paragraph: paragraph,
                    information: information,
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

exports.businessCardGet = async (req, res) => {
    try {
        const contentlist = await BusinessCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let cardData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph,
                    information: content.information,
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

exports.businessCardUpdate = async (req, res, images) => {
    try {
        const rules = { title: "required", paragraph: "required", information: "required" };
        const validation = new Validator(req.body, rules);

        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error",
                responseData: validation.errors.all(),
            });
        } else {
            const { title, paragraph, information } = req.body;
            const { _id } = req.query;
            let businessData = await BusinessCard.findById(_id).lean();
            if (!businessData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                let updatedData = {
                    title: title,
                    paragraph: paragraph,
                    information: information
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
                const data = await BusinessCard.findByIdAndUpdate({ _id: businessData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};

exports.businessCardDelete = async (req, res) => {
    try {
        const { _id } = req.query;
        let businessData = await BusinessCard.findById(_id).lean();
        if (businessData) {
            await BusinessCard.findByIdAndDelete({ _id: businessData._id }, businessData, { new: true });
            return res.status(200).json({ responseMessage: "Deleted Successfully ", responseData: {} });
        } else {
            return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};




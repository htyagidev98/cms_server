const InvestorsCard = require('../../models/investorCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('../../utils/cloudinary')
const fs = require('fs');

exports.investorsCardAdd = async (req, res, images) => {
    try {
        var validation = new Validator(req.body);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            let result = await cloudinary.uploader.upload(req.file.path, {
                images,
                overwrite: true,
                faces: false,
            });
             
              fs.unlinkSync(req.file.path);         // Remove the  image file from Uploads 

            let data = await InvestorsCard.create({
                image_url: result.secure_url,
                image_id: result.public_id
            });
            return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })

    }
}

exports.investorsCardGet = async (req, res) => {
    try {
        const contentlist = await InvestorsCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let cardData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
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

exports.investorsCardUpdate = async (req, res, images) => {
    try {
        const validation = new Validator(req.body);
        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error",
                responseData: validation.errors.all(),
            });
        } else {
            const { _id } = req.query;
            let cardData = await InvestorsCard.findById(_id).lean();
            if (!cardData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                let updatedData = {};
                if (req.file) {
                    const result = await cloudinary.uploader.upload(req.file.path, {
                        images,
                        overwrite: true,
                        faces: false,
                    });
                    updatedData.image_url = result.secure_url;
                    updatedData.image_id = result.public_id;
                }
                const data = await InvestorsCard.findByIdAndUpdate({ _id: cardData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};

exports.investorsCardDelete = async (req, res) => {
    try {
        const { _id } = req.query;
        let cardData = await InvestorsCard.findByIdAndDelete(_id).lean();
        if (cardData) {
            return res.status(200).json({ responseMessage: "Deleted Successfully ", responseData: {} });
        } else {
            return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};



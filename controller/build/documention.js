const Documention = require('../../models/documention')
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('../../utils/cloudinary')
const fs = require('fs');

exports.documentionAdd = async (req, res, images) => {
    // try {
    const rules = { title: "required", heading: "required", paragraph: "required" };

    var validation = new Validator(req.body, rules);
    if (validation.fails()) {
        return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
    } else {
        const { title, heading, paragraph } = req.body;
        let documentionData = await Documention.findOne({ title: title }).lean();
        if (!documentionData) {
            let result = await cloudinary.uploader.upload(req.file.path, {
                images,
                overwrite: true,
                faces: false,
            });

            fs.unlinkSync(req.file.path);         // Remove the  image file from Uploads 

            let data = await Documention.create({
                title: title,
                heading: heading,
                paragraph: paragraph,
                image_url: result.secure_url,
                image_id: result.public_id
            });
            return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
        } else {
            return res.status(403).json({ responseMessage: "title Exist", responseData: {} })
        }
    }
    // } catch (err) {
    //     return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })

    // }
};

exports.documentionGet = async (req, res) => {
    try {
        const contentlist = await Documention.findOne().lean();
        if (contentlist) {
            const contentObj = {
                _id: contentlist._id,
                title: contentlist.title,
                heading: contentlist.heading,
                paragraph: contentlist.paragraph,
                image_url: contentlist.image_url,
                image_id: contentlist.image_id
            };
            return res.status(200).json({ responseMessage: "Successfully", responseData: contentObj });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.documentionUpdate = async (req, res, images) => {
    // try {
        const rules = { title: "required", heading: "required", paragraph: "required" };
        const validation = new Validator(req.body, rules);

        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error",
                responseData: validation.errors.all(),
            });
        } else {
            const { title, heading, paragraph } = req.body;
            const { _id } = req.query;
            let documentionData = await Documention.findById(_id).lean();
            if (!documentionData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                let updatedData = {
                    title: title,
                    heading: heading,
                    paragraph: paragraph
                };
                if (req.file) {
                    const result = await cloudinary.uploader.upload(req.file.path, {
                        images,
                        overwrite: true,
                        faces: false,
                    });
                    fs.unlinkSync(req.file.path);         // Remove the  image file from Uploads 

                    updatedData.image_url = result.secure_url;
                    updatedData.image_id = result.public_id;
                }
                const data = await Documention.findByIdAndUpdate({ _id: documentionData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    // } catch (err) {
    //     return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    // }
};





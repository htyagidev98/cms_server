const FAQ = require('../../models/faq')
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('../../utils/cloudinary')
const fs = require('fs');

exports.faqAdd = async (req, res, images) => {
    // try {
    const rules = { title: "required", heading: "required", paragraph: "required" };

    var validation = new Validator(req.body, rules);
    if (validation.fails()) {
        return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
    } else {
        const { title, heading, paragraph } = req.body;
        let faqData = await FAQ.findOne({ title: title }).lean();
        if (!faqData) {
            let result = await cloudinary.uploader.upload(req.file.path, {
                images,
                overwrite: true,
                faces: false,
            });

            fs.unlinkSync(req.file.path);         // Remove the  image file from Uploads 

            let data = await FAQ.create({
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

exports.faqGet = async (req, res) => {
    try {
        const contentlist = await FAQ.findOne().lean();
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

exports.faqUpdate = async (req, res, images) => {
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
            let faqData = await FAQ.findById(_id).lean();
            if (!faqData) {
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
                const data = await FAQ.findByIdAndUpdate({ _id: faqData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    // } catch (err) {
    //     return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    // }
};





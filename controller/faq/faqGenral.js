const FaqGenral = require('../../models/faqGenral')
bodyParser = require("body-parser")
Validator = require("validatorjs");

exports.faqGenralAdd = async (req, res) => {
    // try {
    const rules = { title: "required", paragraph: "required" };

    var validation = new Validator(req.body, rules);
    if (validation.fails()) {
        return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
    } else {
        const { title, paragraph } = req.body;
        let faqData = await FaqGenral.findOne({ title: title }).lean();
        if (!faqData) {
            let data = await FaqGenral.create({
                title: title,
                paragraph: paragraph
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

exports.faqGenralGet = async (req, res) => {
    try {
        const contentlist = await FaqGenral.find().lean();
        if (contentlist && contentlist.length > 0) {
            let cardData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph,
                };
                cardData.push(contentObj);
            })
            return res.status(200).json({ responseMessage: "Successfully", responseData: cardData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.faqGenralUpdate = async (req, res, images) => {
    // try {
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
        let faqData = await FaqGenral.findById(_id).lean();
        if (!faqData) {
            return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
        } else {
            let updatedData = {
                title: title,
                paragraph: paragraph
            };
            const data = await FaqGenral.findByIdAndUpdate({ _id: faqData._id }, updatedData, { new: true });

            return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
        }
    }
    // } catch (err) {
    //     return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    // }
};





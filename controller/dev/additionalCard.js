const AdditionalCard = require('../../models/additionalCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")

exports.additionalCardAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title,paragraph } = req.body;
            let additionalData = await AdditionalCard.findOne({ title: title }).lean();
            if (!additionalData) {
                let data = await AdditionalCard.create({
                    title: title,
                    paragraph:paragraph
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

exports.additionalCardGet = async (req, res) => {
    try {
        const contentlist = await AdditionalCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let additionalData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph:content.paragraph
                };
                additionalData.push(contentObj);
            })

            return res.status(200).json({ responseMessage: "Successfully", responseData: additionalData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.additionalCardUpdate = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        const validation = new Validator(req.body, rules);

        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error", responseData: validation.errors.all(),
            });
        } else {
            const { title, paragraph } = req.body;
            const { _id } = req.query;
            let additionalData = await AdditionalCard.findById(_id).lean();
            if (!additionalData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                const updatedData = {
                    title: title,
                    paragraph: paragraph
                };
                const data = await AdditionalCard.findByIdAndUpdate({ _id: additionalData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


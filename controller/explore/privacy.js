const Privacy = require('../../models/privacy')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.privacyAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let privacyData = await Privacy.findOne({ title: title }).lean();
            if (!privacyData) {

                let data = await Privacy.create({
                    title: title,
                    paragraph: paragraph,
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

exports.privacyGet = async (req, res) => {
    try {
        const contentlist = await Privacy.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            const PrivacyData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph
                };
                PrivacyData.push(contentObj);
            });
            return res.status(200).json({ responseMessage: "Successfully", responseData: PrivacyData });

        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.privacyUpdate = async (req, res,) => {
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
            let privacyData = await Privacy.findById(_id).lean();
            if (privacyData) {
                let updatedData = {
                    title: title,
                    paragraph: paragraph,
                }
                const data = await Privacy.findByIdAndUpdate({ _id: _id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
const TierCard = require('../../models/tierCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.tierCardAdd = async (req, res) => {
    try {
        const rules = { title: "required", content: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, content, paragraph } = req.body;
            let TierCardData = await TierCard.findOne({ title: title }).lean();
            if (!TierCardData) {

                let data = await TierCard.create({
                    title: title,
                    content: content,
                    paragraph: paragraph
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

exports.tierCardGet = async (req, res) => {
    try {
        const contentlist = await TierCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let resourceData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    content: content.content,
                    paragraph: content.paragraph
                };
                resourceData.push(contentObj);
            })

            return res.status(200).json({ responseMessage: "Successfully", responseData: resourceData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.tierCardUpdate = async (req, res,) => {
    try {
        const rules = { title: "required", content: "required", paragraph: "required" };
        const validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error", responseData: validation.errors.all(),
            });
        } else {
            const { title, content,paragraph } = req.body;
            const { _id } = req.query;
            let TierCardData = await TierCard.findById(_id).lean();
            if (TierCardData) {
                let updatedData = {
                    title: title,
                    content:content,
                    paragraph: paragraph,
                }
                const data = await TierCard.findByIdAndUpdate({ _id: TierCardData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
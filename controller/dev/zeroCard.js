const ZeroCard = require('../../models/zeroCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")

exports.zeroCardAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title,paragraph } = req.body;
            let zeroData = await ZeroCard.findOne({ title: title }).lean();
            if (!zeroData) {
                let data = await ZeroCard.create({
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

exports.zeroCardGet = async (req, res) => {
    try {
        const contentlist = await ZeroCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let zeroData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph:content.paragraph
                };
                zeroData.push(contentObj);
            })

            return res.status(200).json({ responseMessage: "Successfully", responseData: zeroData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.zeroCardUpdate = async (req, res) => {
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
            let zeroData = await ZeroCard.findById(_id).lean();
            if (!zeroData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                const updatedData = {
                    title: title,
                    paragraph: paragraph
                };
                const data = await ZeroCard.findByIdAndUpdate({ _id: zeroData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


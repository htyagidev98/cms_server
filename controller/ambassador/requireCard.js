const RequireCard = require('../../models/requireCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")


exports.requireCardAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let requireData = await RequireCard.findOne({ title: title }).lean();
            if (!requireData) {

                let data = await RequireCard.create({
                    title: title,
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

exports.requireCardGet = async (req, res) => {
    try {
        const contentlist = await RequireCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let responseData = [];
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph
                };
                responseData.push(contentObj);
            });

            return res.status(200).json({ responseMessage: "Successfully", responseData: responseData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.requireCardUpdate = async (req, res,) => {
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
            let requireData = await RequireCard.findById(_id).lean();
            if (requireData) {
                let updatedData = {
                    title: title,
                    paragraph: paragraph
                }
                const data = await RequireCard.findByIdAndUpdate({ _id: requireData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
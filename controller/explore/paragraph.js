const Paragraph = require('../../models/paragraph')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.paragraphAdd = async (req, res) => {
    try {
        const rules = { paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { paragraph } = req.body;
            let paragraphData = await Paragraph.findOne({ paragraph: paragraph }).lean();
            if (!paragraphData) {

                let data = await Paragraph.create({
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

exports.paragraphGet = async (req, res) => {
    try {
        const contentlist = await Paragraph.findOne().sort({ createdAt: 1 });
        if (contentlist) {
            const contentObj = {
                _id: contentlist._id,
                paragraph: contentlist.paragraph
            };
            return res.status(200).json({ responseMessage: "Successfully", responseData: contentObj });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.paragraphUpdate = async (req, res,) => {
    try {
        const rules = { paragraph: "required" };
        const validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error", responseData: validation.errors.all(),
            });
        } else {
            const { paragraph } = req.body;
            const { _id } = req.query;
            let paragraphData = await Paragraph.findById(_id).lean();
            if (paragraphData) {
                let updatedData = {
                    paragraph: paragraph,
                }
                const data = await Paragraph.findByIdAndUpdate({ _id: _id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ esponseMessage: "feature not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
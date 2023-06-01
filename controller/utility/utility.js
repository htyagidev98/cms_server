const Utility = require('../../models/utility')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.utilityAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let utilityData = await Utility.findOne({ title: title }).lean();
            if (!utilityData) {

                let data = await Utility.create({
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

exports.utilityGet = async (req, res) => {
    try {
        const contentlist = await Utility.findOne().sort({ createdAt: 1 });
        if (contentlist) {
            const contentObj = {
                _id: contentlist._id,
                title: contentlist.title,
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

exports.utilityUpdate = async (req, res,) => {
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
            let utilityData = await Utility.findById(_id).lean();
            if (utilityData) {
                let updatedData = {
                    title: title,
                    paragraph: paragraph,
                }
                const data = await Utility.findByIdAndUpdate({ _id: _id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
const Advisors = require('../../models/advisors')
bodyParser = require("body-parser")
Validator = require("validatorjs")


exports.advisorsAdd = async (req, res) => {
    try {
        const rules = { title: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title } = req.body;
            let advisorsData = await Advisors.findOne({ title: title }).lean();
            if (!advisorsData) {

                let data = await Advisors.create({
                    title: title,
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

exports.advisorsGet = async (req, res) => {
    try {
        const contentlist = await Advisors.findOne().lean();
        if (contentlist) {
            const contentObj = {
                _id: contentlist._id,
                title: contentlist.title,
            };
            return res.status(200).json({ responseMessage: "Successfully", responseData: contentObj });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.advisorsUpdate = async (req, res,) => {
    try {
        const rules = { title: "required" };
        const validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error", responseData: validation.errors.all(),
            });
        } else {
            const { title } = req.body;
            const { _id } = req.query;
            let advisorsData = await Advisors.findById(_id).lean();
            if (advisorsData) {
                let updatedData = {
                    title: title,
                }
                const data = await Advisors.findByIdAndUpdate({ _id: advisorsData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
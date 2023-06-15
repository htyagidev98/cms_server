const Ambassador = require('../../models/ambassador')
bodyParser = require("body-parser")
Validator = require("validatorjs")

exports.ambassadorAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let ambassadorData = await Ambassador.findOne({ title: title }).lean();
            if (!ambassadorData) {

                let data = await Ambassador.create({
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

exports.ambassadorGet = async (req, res) => {
    try {
        const contentlist = await Ambassador.findOne().lean();
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

exports.ambassadorUpdate = async (req, res) => {
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
        let ambassadorData = await Ambassador.findById(_id).lean();
        if (!ambassadorData) {
            return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
        } else {
            const updatedData = {
                title: title,
                paragraph: paragraph
            };
            const data = await Ambassador.findByIdAndUpdate({ _id: ambassadorData._id }, updatedData, { new: true });

            return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
        }
    }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};
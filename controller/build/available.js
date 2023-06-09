const Available = require('../../models/available')
bodyParser = require("body-parser")
Validator = require("validatorjs")

exports.availableAdd = async (req, res) => {
    try {
        const rules = { title: "required", content: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, content, paragraph } = req.body;
            let AvailableData = await Available.findOne({ title: title }).lean();
            if (!AvailableData) {
                let data = await Available.create({
                    title: title,
                    content: content,
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

exports.availableGet = async (req, res) => {
    try {
        const contentlist = await Available.findOne().sort({ createdAt: 1 });
        if (contentlist) {
            const contentObj = {
                _id: contentlist._id,
                title: contentlist.title,
                content: contentlist.content,
                paragraph: contentlist.paragraph,
            };
            return res.status(200).json({ responseMessage: "Successfully", responseData: contentObj });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.availableUpdate = async (req, res) => {
    try {
        const rules = { title: "required", content: "required", paragraph: "required" };
        const validation = new Validator(req.body, rules);

        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error", responseData: validation.errors.all(),
            });
        } else {
            const { title, content, paragraph } = req.body;
            const { _id } = req.query;
            let AvailableData = await Available.findById(_id).lean();
            if (!AvailableData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                const updatedData = {
                    title: title,
                    content: content,
                    paragraph: paragraph,
                };
                const data = await Available.findByIdAndUpdate({ _id: _id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


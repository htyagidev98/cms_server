const Count = require('../../models/utilityCount')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.countAdd = async (req, res) => {
    try {
        const rules = { title: "required", content: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, content } = req.body;
            let countData = await Count.findOne({ title: title }).lean();
            if (!countData) {

                let data = await Count.create({
                    title: title,
                    content: content,
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

exports.countGet = async (req, res) => {
    try {
        const contentlist = await Count.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            const countData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    content: content.content
                }
                countData.push(contentObj)
            });
            return res.status(200).json({ responseMessage: "Successfully", responseData: countData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.countUpdate = async (req, res,) => {
    try {
        const rules = { title: "required", content: "required" };
        const validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error", responseData: validation.errors.all(),
            });
        } else {
            const { title, content } = req.body;
            const { _id } = req.query;
            let countData = await Count.findById(_id).lean();
            if (countData) {
                let updatedData = {
                    title: title,
                    content: content,
                }
                const data = await Count.findByIdAndUpdate({ _id: countData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
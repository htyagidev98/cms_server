const Scalability = require('../../models/scalability')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.scalabilityAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let scalabilityData = await Scalability.findOne({ title: title }).lean();
            if (!scalabilityData) {

                let data = await Scalability.create({
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

exports.scalabilityGet = async (req, res) => {
    try {
        const contentlist = await Scalability.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            const scalabilityData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph
                };
                scalabilityData.push(contentObj);
            });
            return res.status(200).json({ responseMessage: "Successfully", responseData: scalabilityData });

        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.scalabilityUpdate = async (req, res,) => {
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
            let scalabilityData = await Scalability.findById(_id).lean();
            if (scalabilityData) {
                let updatedData = {
                    title: title,
                    paragraph: paragraph,
                }
                const data = await Scalability.findByIdAndUpdate({ _id: scalabilityData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ esponseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
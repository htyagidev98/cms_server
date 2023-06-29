const Roadmap = require('../../models/roadmap')
bodyParser = require("body-parser")
Validator = require("validatorjs")
require('dotenv').config();

exports.roadmapAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let nominatorData = await Roadmap.findOne({ title: title }).lean();
            if (!nominatorData) {
                let data = await Roadmap.create({
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

exports.roadmapGet = async (req, res) => {
    console.log(res)
    try {
    const contentlist = await Roadmap.findOne();
    console.log("test", contentlist)
    if (contentlist) {
        const contentObj = {
            _id: contentlist._id,
            title: contentlist.title,
            paragraph: contentlist.paragraph,
        };
        return res.status(200).json({ responseMessage: "Successfully", responseData: contentObj });
    } else {
        return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
    }
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.roadmapUpdate = async (req, res) => {
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
            let nominatorData = await Roadmap.findById(_id).lean();
            if (!nominatorData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                const updatedData = {
                    title: title,
                    paragraph: paragraph,
                };
                const data = await Roadmap.findByIdAndUpdate({ _id: nominatorData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


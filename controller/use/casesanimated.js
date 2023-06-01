const Cases = require('../../models/casesanimated')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.casesAnimatedAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let casesData = await Cases.findOne({ title: title }).lean();
            if (!casesData) {

                let data = await Cases.create({
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

exports.casesAnimatedGet = async (req, res) => {
    try {
        const contentlist = await Cases.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let casesAnimatedData = []
            contentlist.forEach(content=>{
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph
                }
                casesAnimatedData.push(contentObj)
            })
            return res.status(200).json({ responseMessage: "Successfully", responseData: casesAnimatedData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.casesAnimatedUpdate = async (req, res,) => {
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
            let casesData = await Cases.findById(_id).lean();
            if (casesData) {
                let updatedData = {
                    title: title,
                    paragraph: paragraph,
                }
                const data = await Cases.findByIdAndUpdate({ _id: _id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
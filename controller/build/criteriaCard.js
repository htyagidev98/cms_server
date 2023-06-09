const CriteriaCard = require('../../models/criteriaCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.criteriaCardAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title, paragraph } = req.body;
            let CriteriaCardData = await CriteriaCard.findOne({ title: title }).lean();
            if (!CriteriaCardData) {

                let data = await CriteriaCard.create({
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

exports.criteriaCardGet = async (req, res) => {
    try {
        const contentlist = await CriteriaCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let resourceData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph: content.paragraph
                };
                resourceData.push(contentObj);
            })

            return res.status(200).json({ responseMessage: "Successfully",count: contentlist.length, responseData: resourceData,  });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.criteriaCardUpdate = async (req, res,) => {
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
            let CriteriaCardData = await CriteriaCard.findById(_id).lean();
            if (CriteriaCardData) {
                let updatedData = {
                    title: title,
                    paragraph: paragraph,
                }
                const data = await CriteriaCard.findByIdAndUpdate({ _id: CriteriaCardData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
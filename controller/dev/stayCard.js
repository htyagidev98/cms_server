const StayCard = require('../../models/stayCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")

exports.stayCardAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title,paragraph } = req.body;
            let stayData = await StayCard.findOne({ title: title }).lean();
            if (!stayData) {
                let data = await StayCard.create({
                    title: title,
                    paragraph:paragraph
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

exports.stayCardGet = async (req, res) => {
    try {
        const contentlist = await StayCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let stayData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph:content.paragraph
                };
                stayData.push(contentObj);
            })

            return res.status(200).json({ responseMessage: "Successfully", responseData: stayData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.stayCardUpdate = async (req, res) => {
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
            let stayData = await StayCard.findById(_id).lean();
            if (!stayData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                const updatedData = {
                    title: title,
                    paragraph: paragraph
                };
                const data = await StayCard.findByIdAndUpdate({ _id: stayData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


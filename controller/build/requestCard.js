const RequestCard = require('../../models/requestCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")

exports.requestCardAdd = async (req, res) => {
    try {
        const rules = { title: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title } = req.body;
            let RequestCardData = await RequestCard.findOne({ title: title }).lean();
            if (!RequestCardData) {
                let data = await RequestCard.create({
                    title: title
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

exports.requestCardGet = async (req, res) => {
    try {
        const contentlist = await RequestCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let RequestCardData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title
                };
                RequestCardData.push(contentObj);
            })

            return res.status(200).json({ responseMessage: "Successfully", responseData: RequestCardData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.requestCardUpdate = async (req, res) => {
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
            let RequestCardData = await RequestCard.findById(_id).lean();
            if (!RequestCardData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                const updatedData = {
                    title: title
                };
                const data = await RequestCard.findByIdAndUpdate({ _id: RequestCardData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};


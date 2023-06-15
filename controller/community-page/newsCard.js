const NewsCard = require('../../models/newsCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")



exports.newsCardAdd = async (req, res) => {
    try {
        const rules = { title: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title } = req.body;
            let newsData = await NewsCard.findOne({ title: title }).lean();
            if (!newsData) {

                let data = await NewsCard.create({
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

exports.newsCardGet = async (req, res) => {
    try {
        const contentlist = await NewsCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let responseData = [];
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                };
                responseData.push(contentObj);
            });

            return res.status(200).json({ responseMessage: "Successfully", responseData: responseData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.newsCardUpdate = async (req, res,) => {
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
            let newsData = await NewsCard.findById(_id).lean();
            if (newsData) {
                let updatedData = {
                    title: title,
                }
                const data = await NewsCard.findByIdAndUpdate({ _id: newsData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
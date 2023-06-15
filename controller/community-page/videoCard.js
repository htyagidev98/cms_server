const VideoCard = require('../../models/videoCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")


exports.videoCardAdd = async (req, res) => {
    try {
        const rules = { title: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title } = req.body;
            let videoData = await VideoCard.findOne({ title: title }).lean();
            if (!videoData) {

                let data = await VideoCard.create({
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

exports.videoCardGet = async (req, res) => {
    try {
        const contentlist = await VideoCard.find().sort({ createdAt: 1 });
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

exports.videoCardUpdate = async (req, res,) => {
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
            let videoData = await VideoCard.findById(_id).lean();
            if (videoData) {
                let updatedData = {
                    title: title,
                }
                const data = await VideoCard.findByIdAndUpdate({ _id: videoData._id }, updatedData, { new: true });
                return res.status(200).json({ responseMessage: "Successfully Updated", responseData: data });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {}, });
            };
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};
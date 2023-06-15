const TutorialCard = require('../../models/tutorialCard')
bodyParser = require("body-parser")
Validator = require("validatorjs")

exports.tutorialCardAdd = async (req, res) => {
    try {
        const rules = { title: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title,paragraph } = req.body;
            let tutorialData = await TutorialCard.findOne({ title: title }).lean();
            if (!tutorialData) {
                let data = await TutorialCard.create({
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

exports.tutorialCardGet = async (req, res) => {
    try {
        const contentlist = await TutorialCard.find().sort({ createdAt: 1 });
        if (contentlist && contentlist.length > 0) {
            let tutorialData = []
            contentlist.forEach(content => {
                const contentObj = {
                    _id: content._id,
                    title: content.title,
                    paragraph:content.paragraph
                };
                tutorialData.push(contentObj);
            })

            return res.status(200).json({ responseMessage: "Successfully", responseData: tutorialData });
        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};

exports.tutorialCardUpdate = async (req, res) => {
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
            let tutorialData = await TutorialCard.findById(_id).lean();
            if (!tutorialData) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                const updatedData = {
                    title: title,
                    paragraph: paragraph
                };
                const data = await TutorialCard.findByIdAndUpdate({ _id: tutorialData._id }, updatedData, { new: true });

                return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};

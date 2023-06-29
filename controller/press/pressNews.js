const PressNews = require('../../models/pressNews')
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dp6aceayp',
    api_key: '925825434622849',
    api_secret: 'uTuU6iIGtleSOIbtZDO_x5hPErc'
});

exports.pressNewsAdd = async (req, res, images) => {
    try {
        const rules = { year: "required", date: "required", paragraph: "required" };
        var validation = new Validator(req.body, rules);
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { year, date, paragraph } = req.body;
            const yeardata = year.replace(/<[^>]*>/g, '').trim();
            let pressData = await PressNews.findOne({ year: yeardata }).lean();
            if (!pressData) {

                let newsData = []
                let result = await cloudinary.uploader.upload(req.file.path, {
                    images,
                    overwrite: true,
                    faces: false,
                });
                newsData.push({
                    date: date,
                    paragraph: paragraph,
                    image_url: result.secure_url,
                    image_id: result.public_id,
                })
                let data = await PressNews.create({
                    year: yeardata,
                    newsData: newsData
                });
                return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
            } else {

                let result = await cloudinary.uploader.upload(req.file.path, {
                    images,
                    overwrite: true,
                    faces: false,
                });
                pressData.newsData.push({
                    date: date,
                    paragraph: paragraph,
                    image_url: result.secure_url,
                    image_id: result.public_id,
                });
                const updatedData = await PressNews.findOneAndUpdate({ year: yeardata }, { newsData: pressData.newsData }, { new: true });
                return res.status(200).json({ responseMessage: "Successfully", responseData: { updatedData }, });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
}

exports.pressNewsGet = async (req, res) => {
    try {
        const contentlist = await PressNews.find().sort({ createdAt: -1 });
        if (contentlist && contentlist.length > 0) {
            return res.status(200).json({ responseMessage: "Successfully", responseData: contentlist });
        } else {
            return res.status(200).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};


exports.pressNewsDelete = async (req, res) => {
    try {
        const { _id, newsDataId } = req.query;
        if (_id) {
            const pressData = await PressNews.findByIdAndDelete(_id);
            if (pressData) {
                return res.status(200).json({ responseMessage: "Deleted Successfully", responseData: {} });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            }
        } else if (newsDataId) {
            const pressData = await PressNews.findOneAndUpdate(
                { "newsData._id": newsDataId },
                { $pull: { newsData: { _id: newsDataId } } },
                { new: true }
            );

            if (pressData) {
                return res.status(200).json({ responseMessage: "Deleted Successfully", responseData: {} });
            } else {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            }
        } else {
            return res.status(400).json({ responseMessage: "Bad Request", responseData: {} });
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
    }
};













// exports.pressNewsDelete = async (req, res) => {
//     try {
//         const { _id } = req.query;
//         let pressData = await PressNews.findById(_id).lean();
//         if (pressData) {
//             await PressNews.findByIdAndDelete({ _id: pressData._id }, pressData, { new: true });
//             return res.status(200).json({ responseMessage: "Deleted Successfully ", responseData: {} });
//         } else {
//             return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
//         }
//     } catch (err) {
//         return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
//     }
// };



// // exports.meetCardAdd = async (req, res,images) => {
// //     // try {
// //         const rules = { title: "required", paragraph: "required" };
// //         var validation = new Validator(req.body, rules);
// //         if (validation.fails()) {
// //             return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all() });
// //         } else {
// //             const { title, paragraph } = req.body;
// //             let meetData = await MeetCard.findOne({ title: title }).lean();
// //             if (!meetData) {
// //                 let result1 = await cloudinary.uploader.upload(req.file.path, {
// //                     images,
// //                     overwrite: true,
// //                     faces: false
// //                 });
// //                 let result2 = await cloudinary.uploader.upload(req.file2.path, {
// //                     images,
// //                     overwrite: true,
// //                     faces: false
// //                 });
// //                 let data = await MeetCard.create({
// //                     title: title,
// //                     paragraph: paragraph,
// //                     image_url: result1.secure_url,
// //                     image_id: result1.public_id,
// //                     second_image_url: result2.secure_url,
// //                     second_image_id: result2.public_id
// //                 });
// //                 return res.status(200).json({ responseMessage: "Successfully", responseData: { data } });
// //             } else {
// //                 return res.status(403).json({ responseMessage: "Title Exists", responseData: {} });
// //             }
// //         }
// //     // } catch (err) {
// //     //     return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
// //     // }
// // };













// // exports.meetCardAdd = async (req, res) => {
// //     try {
// //         const rules = { title: "required", paragraph: "required" };
// //         var validation = new Validator(req.body, rules);
// //         if (validation.fails()) {
// //             return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all() });
// //         } else {
// //             const { title, paragraph } = req.body;
// //             let meetData = await meetCard.findOne({ title: title }).lean();
// //             if (!meetData) {
// //                 let imageUrls = [];
// //                 let imageIds = [];

// //                 // Upload multiple images to cloudinary
// //                 for (let i = 0; i < req.files.length; i++) {
// //                     let result = await cloudinary.uploader.upload(req.files[i].path, {
// //                         overwrite: true,
// //                         faces: false
// //                     });
// //                     imageUrls.push(result.secure_url);
// //                     imageIds.push(result.public_id);
// //                 }

// //                 let data = await meetCard.create({
// //                     title: title,
// //                     paragraph: paragraph,
// //                     image_url: imageUrls,
// //                     image_id: imageIds
// //                 });

// //                 return res.status(200).json({ responseMessage: "Successfully", responseData: { data } });
// //             } else {
// //                 return res.status(403).json({ responseMessage: "Title already exists", responseData: {} });
// //             }
// //         }
// //     } catch (err) {
// //         return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
// //     }
// // }

// // exports.meetCardGet = async (req, res) => {
// //     try {
// //         const contentlist = await meetCard.find().sort({ createdAt: 1 });
// //         if (contentlist && contentlist.length > 0) {
// //             let cardData = []
// //             contentlist.forEach(content => {
// //                 const contentObj = {
// //                     _id: content._id,
// //                     title: content.title,
// //                     paragraph: content.paragraph,
// //                     image_url: content.image_url,
// //                     image_id: content.image_id
// //                 };
// //                 cardData.push(contentObj);
// //             });

// //             return res.status(200).json({ responseMessage: "Successfully", responseData: cardData });
// //         } else {
// //             return res.status(200).json({ responseMessage: "No Data found", responseData: {} })
// //         };
// //     } catch (err) {
// //         return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
// //     }
// // };

// // exports.meetCardUpdate = async (req, res, images) => {
// //     try {
// //         const rules = { title: "required", paragraph: "required" };
// //         const validation = new Validator(req.body, rules);

// //         if (validation.fails()) {
// //             return res.status(422).json({
// //                 responseMessage: "Validation Error",
// //                 responseData: validation.errors.all(),
// //             });
// //         } else {
// //             const { title, paragraph } = req.body;
// //             const { _id } = req.query;
// //             let meetData = await meetCard.findById(_id).lean();
// //             if (!meetData) {
// //                 return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
// //             } else {
// //                 let updatedData = {
// //                     title: title,
// //                     paragraph: paragraph,
// //                 };
// //                 if (req.file) {
// //                     const result = await cloudinary.uploader.upload(req.file.path, {
// //                         images,
// //                         overwrite: true,
// //                         faces: false,
// //                     });
// //                     updatedData.image_url = result.secure_url;
// //                     updatedData.image_id = result.public_id;
// //                 }
// //                 const data = await meetCard.findByIdAndUpdate({ _id: meetData._id }, updatedData, { new: true });

// //                 return res.status(200).json({ responseMessage: "Successfully updated", responseData: data });
// //             }
// //         }
// //     } catch (err) {
// //         return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} });
// //     }
// // };




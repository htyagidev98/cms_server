const Feature = require("../models/feature")
bodyParser = require("body-parser")
Validator = require("validatorjs")
const cloudinary = require('../utils/cloudinary')



exports.featureContentAdd = async (req, res, images) => {
    try {
        const rules = { title: "required" };
        var validation = new Validator(req.body, rules)
        if (validation.fails()) {
            return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
        } else {
            const { title } = req.body;
            let featureData = await Feature.findOne({ title: title }).lean();
            if (!featureData) {
                let logoData = [];
                let result = await cloudinary.uploader.upload(req.file.path, {
                    images,
                    overwrite: true,
                    faces: false,
                });
                logoData.push({
                    image_url: result.secure_url,
                    image_id: result.public_id,
                    image_name: result.original_filename
                });
                let data = await Feature.create({
                    title: title,
                    logoData: logoData
                });
                return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
            } else {
                let result = await cloudinary.uploader.upload(req.file.path, {
                    images,
                    overwrite: true,
                    faces: false,
                });
                featureData.logoData.push({
                    image_url: result.secure_url,
                    image_id: result.public_id,
                    image_name: result.original_filename
                });
                const featureData = await Feature.findOneAndUpdate({ title: title }, { logoData: featureData.logoData }, { new: true });
                return res.status(200).json({ responseMessage: "Successfully", responseData: { featureData }, });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {} })
    }
}


exports.featureContentGet = async (req, res) => {
    try {
        const contentlist = await Feature.findOne().lean();
        if (contentlist) {
            let image_data = contentlist.logoData;
            if (image_data.length > 0) {
                let ImagesData = []
                image_data.forEach(image => {
                    const imageObj = {
                        image_id: image.image_id,
                        image_name: image.image_name,
                        image_url: image.image_url
                    }
                    ImagesData.push(imageObj);
                });
                const contentObj = {
                    _id: contentlist._id,
                    title: contentlist.title,
                    ImagesData: ImagesData
                };
                return res.status(200).json({ responseMessage: "Successfully", responseData: contentObj });
            }

        } else {
            return res.status(404).json({ responseMessage: "No Data found", responseData: {} })
        };
    } catch (err) {
        return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
    }
};


exports.featureContentUpdate = async (req, res, images) => {
    try {
        const rules = { title: "required" };
        const validation = new Validator(req.body, rules);

        if (validation.fails()) {
            return res.status(422).json({
                responseMessage: "Validation Error",
                responseData: validation.errors.all(),
            });
        } else {
            const { title } = req.body;
            const { _id } = req.query;
            let Data = await Feature.findById(_id).lean();
            if (!Data) {
                return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
            } else {
                let logoData = [];

                // Check if file is uploaded and process it
                if (req.file) {
                    let result = await cloudinary.uploader.upload(req.file.path, {
                        images,
                        overwrite: true,
                        faces: false,
                    });
                    logoData.push({
                        image_url: result.secure_url,
                        image_id: result.public_id,
                        image_name: result.original_filename
                    });
                }

                const updatedData = {
                    title: title
                }

                // Update title and/or images based on their availability
                let data = await Feature.findByIdAndUpdate(
                    { _id: Data._id },
                    { $set: updatedData },
                    { new: true }
                );

                // If images are available, push the new images to logoData array
                if (logoData.length > 0) {
                    data.logoData.push(...logoData);
                    await data.save();
                }

                return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
            }
        }
    } catch (err) {
        return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
    }
};












//////////////////////
// exports.featureContentAdd = async (req, res, images) => {
//     try {
//         const rules = { title: "required" };
//         var validation = new Validator(req.body, rules)
//         if (validation.fails()) {
//             return res.status(422).json({ responseMessage: "Validation Error", responseData: validation.errors.all(), });
//         } else {
//             const { title } = req.body;
//             const featureData = await Feature.findOne({ title: title }).lean();
//             if (!featureData) {
//                 let logoData = [];
//                 let result = await cloudinary.uploader.upload(req.file.path, {
//                     images,
//                     overwrite: true,
//                     faces: false,
//                 });
//                 logoData.push({
//                     image_url: result.secure_url,
//                     image_id: result.public_id,
//                     image_name: result.original_filename
//                 });
//                 let data = await Feature.create({
//                     title: title,
//                     logoData: logoData
//                 });
//                 return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
//             } else {
//                 return res.status(403).json({ responseMessage: "Data  Exist", responseData: {} });
//             }
//         }
//     } catch (err) {
//         return res.status(500).json({ responseMessage: " Internal Sever Error", responseData: {} })
//     }
// }

// exports.featureContentUpdate = async (req, res, images) => {
//     try {
//         const rules = { title: "required" };
//         const validation = new Validator(req.body, rules);

//         if (validation.fails()) {
//             return res.status(422).json({
//                 responseMessage: "Validation Error",
//                 responseData: validation.errors.all(),
//             });
//         } else {
//             const { title } = req.body;
//             const { _id } = req.query;
//             let Data = await Feature.findById(_id).lean();
//             if (!Data) {
//                 return res.status(404).json({ responseMessage: "Data not found", responseData: {} });
//             } else {
//                 let logoData = [];
//                 let result = await cloudinary.uploader.upload(req.file.path, {
//                     images,
//                     overwrite: true,
//                     faces: false,
//                 });
//                 logoData.push({
//                     image_url: result.secure_url,
//                     image_id: result.public_id,
//                     image_name: result.original_filename
//                 });
//                 const updatedData = {
//                     title: title
//                 }
//                 let data = await Feature.findByIdAndUpdate(
//                     { _id: Data._id },
//                     updatedData,
//                     { $push: { logoData: logoData } },
//                     { new: true }
//                 );

//                 return res.status(200).json({ responseMessage: "Successfully", responseData: { data }, });
//             }
//         }
//     } catch (err) {
//         return res.status(500).json({ responseMessage: "Internal Server Error", responseData: {}, });
//     }
// };
////////////

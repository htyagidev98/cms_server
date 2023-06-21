// const { meetCardAdd, meetCardGet, meetCardUpdate, meetCardDelete } = require('../controller/team/meetCard')
// const express = require('express')
// router = express.Router();
// const multer = require('multer')
// const path = require('path');

// // Image Upload 

// const storage = multer.diskStorage({
//     destination: './uploads',
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });


// //  API Router

// router.post('/meet/card/add', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), meetCardAdd);
// // router.get('/meet/card/get', meetCardGet)
// // router.put('/meet/card/update', upload.single('images'), meetCardUpdate)
// // router.delete('/meet/card/delete', meetCardDelete)

// module.exports = router;




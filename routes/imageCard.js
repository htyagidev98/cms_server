const multer = require('multer')
const path = require('path');
const { imageCardAdd, imageCardGet, imageCardUpdate, imageCardDelete } = require('../controller/ecosystem/imageCard')
const express = require('express')
router = express.Router();

// Image Upload 

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// API Router


router.post('/imageCard/add', upload.single('image'), imageCardAdd)
router.get('/imageCard/get', imageCardGet)
router.put('/imageCard/update', upload.single('image'), imageCardUpdate)
router.delete('/imageCard/delete', imageCardDelete)

module.exports = router;
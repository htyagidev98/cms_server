const multer = require('multer')
const path = require('path');
const { investorsCardAdd, investorsCardGet, investorsCardUpdate, investorsCardDelete } = require('../controller/press/investorCard')
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


router.post('/investors/card/add', upload.single('image'), investorsCardAdd)
router.get('/investors/card/get', investorsCardGet)
router.put('/investors/card/update', upload.single('image'), investorsCardUpdate)
router.delete('/investors/card/delete', investorsCardDelete)

module.exports = router;
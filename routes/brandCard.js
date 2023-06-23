const { brandCardAdd, brandCardGet, brandCardUpdate, brandCardDelete } = require('../controller/press/brandCard');
const express = require('express');
router = express.Router();
const multer = require('multer')
const path = require('path');
// Image Upload 

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });



// API ROUTES

router.post('/brand/card/add', upload.single('image'), brandCardAdd);
router.get('/brand/card/get', brandCardGet);
router.put('/brand/card/update', upload.single('image'), brandCardUpdate)
router.delete('/brand/card/delete', brandCardDelete)

module.exports = router;
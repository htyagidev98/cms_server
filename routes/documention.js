const multer = require('multer')
const path = require('path');
const { documentionAdd, documentionGet, documentionUpdate,  } = require('../controller/build/documention')
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


router.post('/documention/add', upload.single('image'), documentionAdd)
router.get('/documention/get', documentionGet)
router.put('/documention/update', upload.single('image'), documentionUpdate)
module.exports = router;
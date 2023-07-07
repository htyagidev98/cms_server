const multer = require('multer')
const path = require('path');
const { faqAdd, faqGet, faqUpdate,  } = require('../controller/faq/faq')
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


router.post('/faq/add', upload.single('image'), faqAdd)
router.get('/faq/get', faqGet)
router.put('/faq/update', upload.single('image'), faqUpdate)

module.exports = router;
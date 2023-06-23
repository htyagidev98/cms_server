const multer = require('multer')
const path = require('path');
const { pressNewsAdd, pressNewsGet } = require('../controller/press/pressNews')
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


router.post('/press/news/add', upload.single('image'), pressNewsAdd)
router.get('/press/news/get', pressNewsGet)
// router.put('/press/news/update', upload.single('image'), pressNewsUpdate)
// router.delete('/press/news/delete', pressNewsDelete)

module.exports = router;
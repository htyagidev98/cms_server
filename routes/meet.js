const multer = require('multer')
const path = require('path');
const { meetAdd, meetGet, meetUpdate } = require('../controller/team/meet')
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


router.post('/meet/add', upload.single('image'), meetAdd)
router.get('/meet/get', meetGet)
router.put('/meet/update', upload.single('image'), meetUpdate)

module.exports = router;
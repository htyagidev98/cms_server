const multer = require('multer')
const path = require('path');
const { researchAdd, researchGet, researchUpdate } = require('../controller/team/research')
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


router.post('/research/add', upload.single('image'), researchAdd)
router.get('/research/get', researchGet)
router.put('/research/update', upload.single('image'), researchUpdate)

module.exports = router;
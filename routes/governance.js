const { governanceAdd, governanceGet, governanceUpdate } = require('../controller/faq/governance')
const express = require('express')
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



//  API Router

router.post('/governance/add', upload.single('image'), governanceAdd)
router.get('/governance/get', governanceGet)
router.put('/governance/update', upload.single('image'), governanceUpdate)

module.exports = router;




const multer = require('multer')
const path = require('path');
const { supporterCardAdd, supporterCardGet, supporterCardUpdate, supporterCardDelete } = require('../controller/build/supporterCard')
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


router.post('/supporter/card/add', upload.single('image'), supporterCardAdd)
router.get('/supporter/card/get', supporterCardGet)
router.put('/supporter/card/update', upload.single('image'), supporterCardUpdate)
router.delete('/supporter/card/delete', supporterCardDelete)

module.exports = router;
const { businessCardAdd, businessCardGet, businessCardUpdate, businessCardDelete } = require('../controller/team/businessCard');
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

router.post('/business/card/add', upload.single('image'), businessCardAdd);
router.get('/business/card/get', businessCardGet);
router.put('/business/card/update', upload.single('image'), businessCardUpdate)
router.delete('/business/card/delete', businessCardDelete)

module.exports = router;
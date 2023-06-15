const { galleryCardAdd, galleryCardGet, galleryCardUpdate, galleryCardDelete } = require('../controller/upcoming-events/galleryCard')
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

router.post('/gallery/card/add', upload.single('image'), galleryCardAdd)
router.get('/gallery/card/get', galleryCardGet)
router.put('/gallery/card/update', upload.single('image'), galleryCardUpdate)
router.delete('/gallery/card/delete', galleryCardDelete)

module.exports = router;




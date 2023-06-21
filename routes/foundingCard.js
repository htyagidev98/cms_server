const { foundingCardAdd, foundingCardGet, foundingCardUpdate, foundingCardDelete } = require('../controller/team/foundingCard')
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

router.post('/founding/card/add', upload.single('image'), foundingCardAdd)
router.get('/founding/card/get', foundingCardGet)
router.put('/founding/card/update', upload.single('image'), foundingCardUpdate)
router.delete('/founding/card/delete', foundingCardDelete)

module.exports = router;




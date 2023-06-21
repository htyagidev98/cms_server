const { cardinalCardAdd, cardinalCardGet, cardinalCardUpdate, cardinalCardDelete } = require('../controller/team/cardinalCard');
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

router.post('/cardinal/card/add', upload.single('image'), cardinalCardAdd);
router.get('/cardinal/card/get', cardinalCardGet);
router.put('/cardinal/card/update', upload.single('image'), cardinalCardUpdate)
router.delete('/cardinal/card/delete', cardinalCardDelete)

module.exports = router;
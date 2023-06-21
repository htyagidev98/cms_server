const { advisorsCardAdd, advisorsCardGet, advisorsCardUpdate, advisorsCardDelete } = require('../controller/team/advisorsCard');
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

router.post('/advisors/card/add', upload.single('image'), advisorsCardAdd);
router.get('/advisors/card/get', advisorsCardGet);
router.put('/advisors/card/update', upload.single('image'), advisorsCardUpdate)
router.delete('/advisors/card/delete', advisorsCardDelete)

module.exports = router;
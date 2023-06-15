const { eventCardAdd, eventCardGet, eventCardUpdate, eventCardDelete } = require('../controller/upcoming-events/eventCard')
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

router.post('/event/card/add', upload.single('image'), eventCardAdd)
router.get('/event/card/get', eventCardGet)
router.put('/event/card/update', upload.single('image'), eventCardUpdate)
router.delete('/event/card/delete', eventCardDelete)

module.exports = router;















// const { eventCardAdd, eventCardGet, eventCardUpdate } = require('../controller/upcoming-events/eventCard')
// const express = require('express')
// router = express.Router();

// //  API Router

// router.post('/event/card/add', eventCardAdd)
// router.get('/event/card/get', eventCardGet)
// router.put('/event/card/update', eventCardUpdate)

// module.exports = router;




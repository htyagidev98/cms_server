const { additionalCardAdd, additionalCardGet, additionalCardUpdate } = require('../controller/dev/additionalCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/additional/card/add', additionalCardAdd)
router.get('/additional/card/get', additionalCardGet)
router.put('/additional/card/update', additionalCardUpdate)

module.exports = router;




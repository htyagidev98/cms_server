const { lookingCardAdd, lookingCardGet, lookingCardUpdate } = require('../controller/ambassador/lookingCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/looking/card/add', lookingCardAdd)
router.get('/looking/card/get', lookingCardGet)
router.put('/looking/card/update', lookingCardUpdate)

module.exports = router;




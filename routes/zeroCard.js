const { zeroCardAdd, zeroCardGet, zeroCardUpdate } = require('../controller/dev/zeroCard')
const express = require('express')
router = express.Router();


// API Router

router.post('/zero/card/add', zeroCardAdd)
router.get('/zero/card/get', zeroCardGet)
router.put('/zero/card/update', zeroCardUpdate)

module.exports = router;






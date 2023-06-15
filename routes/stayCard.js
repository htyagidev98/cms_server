const { stayCardAdd, stayCardGet, stayCardUpdate } = require('../controller/dev/stayCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/stay/card/add', stayCardAdd)
router.get('/stay/card/get', stayCardGet)
router.put('/stay/card/update', stayCardUpdate)

module.exports = router;




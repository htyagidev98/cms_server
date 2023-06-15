const { requireCardAdd, requireCardGet, requireCardUpdate } = require('../controller/ambassador/requireCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/require/card/add', requireCardAdd)
router.get('/require/card/get', requireCardGet)
router.put('/require/card/update', requireCardUpdate)

module.exports = router;




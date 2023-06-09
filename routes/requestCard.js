const { requestCardAdd, requestCardGet, requestCardUpdate } = require('../controller/build/requestCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/request/card/add', requestCardAdd)
router.get('/request/card/get', requestCardGet)
router.put('/request/card/update', requestCardUpdate)

module.exports = router;




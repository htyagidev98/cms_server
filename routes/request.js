const { requestAdd, requestGet, requestUpdate } = require('../controller/build/request')
const express = require('express')
router = express.Router();

//  API Router

router.post('/request/add', requestAdd)
router.get('/request/get', requestGet)
router.put('/request/update', requestUpdate)

module.exports = router;




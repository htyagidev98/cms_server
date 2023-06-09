const { poweredAdd, poweredGet, poweredUpdate } = require('../controller/dev/powered')
const express = require('express')
router = express.Router();

//  API Router

router.post('/powered/add', poweredAdd)
router.get('/powered/get', poweredGet)
router.put('/powered/update', poweredUpdate)

module.exports = router;




const { backgroundAdd, backgroundGet, backgroundUpdate } = require('../controller/ambassador/background')
const express = require('express')
router = express.Router();

//  API Router

router.post('/background/add', backgroundAdd)
router.get('/background/get', backgroundGet)
router.put('/background/update', backgroundUpdate)

module.exports = router;




const { accordAdd, accordGet, accordUpdate } = require('../controller/carbon-negative/accord')
const express = require('express')
router = express.Router();

//  API Router

router.post('/accord/add', accordAdd)
router.get('/accord/get', accordGet)
router.put('/accord/update', accordUpdate)

module.exports = router;




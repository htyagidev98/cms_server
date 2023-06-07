const { fundingAdd, fundingGet, fundingUpdate } = require('../controller/build/funding')
const express = require('express')
router = express.Router();

//  API Router

router.post('/funding/add', fundingAdd)
router.get('/funding/get', fundingGet)
router.put('/funding/update', fundingUpdate)

module.exports = router;




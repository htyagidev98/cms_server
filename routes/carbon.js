const { carbonAdd, carbonGet, carbonUpdate } = require('../controller/carbon-negative/carbon')
const express = require('express')
router = express.Router();

//  API Router

router.post('/carbon/add', carbonAdd)
router.get('/carbon/get', carbonGet)
router.put('/carbon/update', carbonUpdate)

module.exports = router;




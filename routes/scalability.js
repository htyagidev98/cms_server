const { scalabilityAdd, scalabilityGet, scalabilityUpdate } = require('../controller/explore/scalability')
const express = require('express')
router = express.Router();

//  API Router

router.post('/scalability/add', scalabilityAdd)
router.get('/scalability/get', scalabilityGet)
router.put('/scalability/update', scalabilityUpdate)

module.exports = router;




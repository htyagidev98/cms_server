const { availableAdd, availableGet, availableUpdate } = require('../controller/build/available')
const express = require('express')
router = express.Router();

//  API Router

router.post('/available/add', availableAdd)
router.get('/available/get', availableGet)
router.put('/available/update', availableUpdate)

module.exports = router;




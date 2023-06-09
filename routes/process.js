const { processAdd, processGet, processUpdate } = require('../controller/build/process')
const express = require('express')
router = express.Router();

//  API Router

router.post('/process/add', processAdd)
router.get('/process/get', processGet)
router.put('/process/update', processUpdate)

module.exports = router;




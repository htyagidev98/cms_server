const { programAdd, programGet, programUpdate } = require('../controller/dev/program')
const express = require('express')
router = express.Router();

//  API Router

router.post('/program/add', programAdd)
router.get('/program/get', programGet)
router.put('/program/update', programUpdate)

module.exports = router;




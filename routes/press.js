const { pressAdd, pressGet, pressUpdate } = require('../controller/press/press')
const express = require('express')
router = express.Router();

//  API Router

router.post('/press/add', pressAdd)
router.get('/press/get', pressGet)
router.put('/press/update', pressUpdate)

module.exports = router;




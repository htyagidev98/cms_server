const { zeroAdd, zeroGet, zeroUpdate } = require('../controller/dev/zero')
const express = require('express')
router = express.Router();

//  API Router

router.post('/zero/add', zeroAdd)
router.get('/zero/get', zeroGet)
router.put('/zero/update', zeroUpdate)

module.exports = router;




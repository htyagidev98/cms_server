const { stayAdd, stayGet, stayUpdate } = require('../controller/dev/stay')
const express = require('express')
router = express.Router();


// API Router

router.post('/stay/add', stayAdd)
router.get('/stay/get', stayGet)
router.put('/stay/update', stayUpdate)

module.exports = router;
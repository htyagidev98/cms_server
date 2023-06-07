const { numbertextAdd, numbertextGet, numbertextUpdate } = require('../controller/carbon-negative/numbertext')
const express = require('express')
router = express.Router();

//  API Router

router.post('/numbertext/add', numbertextAdd)
router.get('/numbertext/get', numbertextGet)
router.put('/numbertext/update', numbertextUpdate)

module.exports = router;




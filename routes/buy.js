const { buyAdd, buyGet, buyUpdate } = require('../controller/faq/buy')
const express = require('express')
router = express.Router();


// API Router

router.post('/buy/add', buyAdd)
router.get('/buy/get', buyGet)
router.put('/buy/update', buyUpdate)

module.exports = router;
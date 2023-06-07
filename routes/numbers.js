const { numbersAdd, numbersGet, numbersUpdate } = require('../controller/carbon-negative/numbers')
const express = require('express')
router = express.Router();

//  API Router

router.post('/numbers/add', numbersAdd)
router.get('/numbers/get', numbersGet)
router.put('/numbers/update', numbersUpdate)

module.exports = router;




const { greenAdd, greenGet, greenUpdate } = require('../controller/carbon-negative/green')
const express = require('express')
router = express.Router();

//  API Router

router.post('/green/add', greenAdd)
router.get('/green/get', greenGet)
router.put('/green/update', greenUpdate)

module.exports = router;




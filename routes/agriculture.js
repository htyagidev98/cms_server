const { agricultureAdd, agricultureGet, agricultureUpdate } = require('../controller/carbon-negative/agriculture')
const express = require('express')
router = express.Router();

//  API Router

router.post('/agriculture/add', agricultureAdd)
router.get('/agriculture/get', agricultureGet)
router.put('/agriculture/update', agricultureUpdate)

module.exports = router;




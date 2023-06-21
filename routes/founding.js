const { foundingAdd, foundingGet, foundingUpdate } = require('../controller/team/founding')
const express = require('express')
router = express.Router();

//  API Router

router.post('/founding/add', foundingAdd)
router.get('/founding/get', foundingGet)
router.put('/founding/update', foundingUpdate)

module.exports = router;




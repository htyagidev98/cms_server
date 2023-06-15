const { lookingAdd, lookingGet, lookingUpdate } = require('../controller/ambassador/looking')
const express = require('express')
router = express.Router();

//  API Router

router.post('/looking/add', lookingAdd)
router.get('/looking/get', lookingGet)
router.put('/looking/update', lookingUpdate)

module.exports = router;




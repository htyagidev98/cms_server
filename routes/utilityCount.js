const { countAdd, countGet, countUpdate } = require('../controller/utility/count')
const express = require('express')
router = express.Router();

//  API Router

router.post('/count/add', countAdd)
router.get('/count/get', countGet)
router.put('/count/update', countUpdate)

module.exports = router;




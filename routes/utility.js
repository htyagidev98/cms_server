const { utilityAdd, utilityGet, utilityUpdate } = require('../controller/utility/utility')
const express = require('express')
router = express.Router();

//  API Router

router.post('/utility/add', utilityAdd)
router.get('/utility/get', utilityGet)
router.put('/utility/update', utilityUpdate)

module.exports = router;




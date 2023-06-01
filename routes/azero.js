const { azeroUtilityAdd, azeroUtilityGet, azeroUtilityUpdate } = require('../controller/utility/azero')
const express = require('express')
router = express.Router();

//  API Router

router.post('/azero/utility/add', azeroUtilityAdd)
router.get('/azero/utility/get', azeroUtilityGet)
router.put('/azero/utility/update', azeroUtilityUpdate)

module.exports = router;




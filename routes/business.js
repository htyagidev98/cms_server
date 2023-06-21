const { businessAdd, businessGet, businessUpdate } = require('../controller/team/business')
const express = require('express')
router = express.Router();

//  API Router

router.post('/business/add', businessAdd)
router.get('/business/get', businessGet)
router.put('/business/update', businessUpdate)

module.exports = router;




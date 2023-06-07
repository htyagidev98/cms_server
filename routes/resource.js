const { resourceAdd, resourceGet, resourceUpdate } = require('../controller/build/resource')
const express = require('express')
router = express.Router();

//  API Router

router.post('/resource/add', resourceAdd)
router.get('/resource/get', resourceGet)
router.put('/resource/update', resourceUpdate)

module.exports = router;




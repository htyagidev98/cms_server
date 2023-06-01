const { securityAdd, securityGet, securityUpdate } = require('../controller/explore/security')
const express = require('express')
router = express.Router();

//  API Router

router.post('/security/add', securityAdd)
router.get('/security/get', securityGet)
router.put('/security/update', securityUpdate)

module.exports = router;




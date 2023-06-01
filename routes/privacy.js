const { privacyAdd, privacyGet, privacyUpdate } = require('../controller/explore/privacy')
const express = require('express')
router = express.Router();

//  API Router

router.post('/privacy/add', privacyAdd)
router.get('/privacy/get', privacyGet)
router.put('/privacy/update', privacyUpdate)

module.exports = router;




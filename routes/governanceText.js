const { governanceTextAdd, governanceTextGet, governanceTextUpdate } = require('../controller/faq/governanceText')
const express = require('express')
router = express.Router();

//  API Router

router.post('/governance/text/add', governanceTextAdd)
router.get('/governance/text/get', governanceTextGet)
router.put('/governance/text/update', governanceTextUpdate)

module.exports = router;




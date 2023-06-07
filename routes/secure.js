const { secureContentAdd, secureContentGet, secureContentUpdate } = require('../controller/staking/secure')
const express = require('express')
router = express.Router();


// API Router

router.post('/secure/content/add', secureContentAdd)
router.get('/secure/content/get', secureContentGet)
router.put('/secure/content/update', secureContentUpdate)

module.exports = router;

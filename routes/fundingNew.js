const { fundingNewAdd, fundingNewGet, fundingNewUpdate } = require('../controller/community-page/fundingNew')
const express = require('express')
router = express.Router();

// API Router

router.post('/funding/new/add', fundingNewAdd)
router.get('/funding/new/get', fundingNewGet)
router.put('/funding/new/update', fundingNewUpdate)

module.exports = router;
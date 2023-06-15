const { ambassadorAdd, ambassadorGet, ambassadorUpdate } = require('../controller/community-page/ambassador')
const express = require('express')
router = express.Router();

// API Router

router.post('/ambassador/add', ambassadorAdd)
router.get('/ambassador/get', ambassadorGet)
router.put('/ambassador/update', ambassadorUpdate)

module.exports = router;
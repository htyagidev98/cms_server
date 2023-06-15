const { bountyAdd, bountyGet, bountyUpdate } = require('../controller/community-page/bounty')
const express = require('express')
router = express.Router();

// API Router

router.post('/bounty/add', bountyAdd)
router.get('/bounty/get', bountyGet)
router.put('/bounty/update', bountyUpdate)

module.exports = router;
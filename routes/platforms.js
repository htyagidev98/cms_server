const { platformsAdd, platformsGet, platformsUpdate } = require('../controller/community-page/platforms')
const express = require('express')
router = express.Router();

// API Router

router.post('/platforms/add', platformsAdd)
router.get('/platforms/get', platformsGet)
router.put('/platforms/update', platformsUpdate)

module.exports = router;
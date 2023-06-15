const { socialAdd, socialGet, socialUpdate } = require('../controller/community-page/social')
const express = require('express')
router = express.Router();

// API Router

router.post('/social/add', socialAdd)
router.get('/social/get', socialGet)
router.put('/social/update', socialUpdate)

module.exports = router;
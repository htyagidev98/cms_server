const { economyAdd, economyGet, economyUpdate } = require('../controller/faq/economy')
const express = require('express')
router = express.Router();


// API Router

router.post('/economy/add', economyAdd)
router.get('/economy/get', economyGet)
router.put('/economy/update', economyUpdate)

module.exports = router;
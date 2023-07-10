const { consensusAdd, consensusGet, consensusUpdate, } = require('../controller/faq/consensus')
const express = require('express')
router = express.Router();


// API Router

router.post('/consensus/add', consensusAdd)
router.get('/consensus/get', consensusGet)
router.put('/consensus/update', consensusUpdate)

module.exports = router;
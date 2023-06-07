const { ecosystemAdd, ecosystemGet, ecosystemUpdate } = require('../controller/ecosystem/ecosystem')
const express = require('express')
router = express.Router();


// API Router

router.post('/ecosystem/add', ecosystemAdd)
router.get('/ecosystem/get', ecosystemGet)
router.put('/ecosystem/update', ecosystemUpdate)

module.exports = router;

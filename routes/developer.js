const { developerAdd, developerGet, developerUpdate } = require('../controller/dev/developer')
const express = require('express')
router = express.Router();


// API Router

router.post('/developer/add', developerAdd)
router.get('/developer/get', developerGet)
router.put('/developer/update', developerUpdate)

module.exports = router;
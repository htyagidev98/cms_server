const { toolsAdd, toolsGet, toolsUpdate } = require('../controller/dev/tools')
const express = require('express')
router = express.Router();


// API Router

router.post('/tools/add', toolsAdd)
router.get('/tools/get', toolsGet)
router.put('/tools/update', toolsUpdate)

module.exports = router;
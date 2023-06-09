const { portalAdd, portalGet, portalUpdate } = require('../controller/dev/portal')
const express = require('express')
router = express.Router();

//  API Router

router.post('/portal/add', portalAdd)
router.get('/portal/get', portalGet)
router.put('/portal/update', portalUpdate)

module.exports = router;




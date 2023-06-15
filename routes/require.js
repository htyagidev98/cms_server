const { requireAdd, requireGet, requireUpdate } = require('../controller/ambassador/require')
const express = require('express')
router = express.Router();

//  API Router

router.post('/require/add', requireAdd)
router.get('/require/get', requireGet)
router.put('/require/update', requireUpdate)

module.exports = router;




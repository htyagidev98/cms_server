const { supportAdd, supportGet, supportUpdate } = require('../controller/team/support')
const express = require('express')
router = express.Router();

//  API Router

router.post('/support/add', supportAdd)
router.get('/support/get', supportGet)
router.put('/support/update', supportUpdate)

module.exports = router;




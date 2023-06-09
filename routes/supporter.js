const { supporterAdd, supporterGet, supporterUpdate } = require('../controller/build/supporter')
const express = require('express')
router = express.Router();

//  API Router

router.post('/supporter/add', supporterAdd)
router.get('/supporter/get', supporterGet)
router.put('/supporter/update', supporterUpdate)

module.exports = router;




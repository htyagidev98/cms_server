const { actionsAdd, actionsGet, actionsUpdate } = require('../controller/carbon-negative/actions')
const express = require('express')
router = express.Router();

//  API Router

router.post('/actions/add', actionsAdd)
router.get('/actions/get', actionsGet)
router.put('/actions/update', actionsUpdate)

module.exports = router;




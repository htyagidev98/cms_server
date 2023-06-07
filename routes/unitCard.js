const { unitCardAdd, unitCardGet, unitCardUpdate } = require('../controller/carbon-negative/unitCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/unit/Card/add', unitCardAdd)
router.get('/unit/Card/get', unitCardGet)
router.put('/unit/Card/update', unitCardUpdate)

module.exports = router;




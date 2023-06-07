const { purposeCardAdd, purposeCardGet, purposeCardUpdate } = require('../controller/build/purposeCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/purposeCard/add', purposeCardAdd)
router.get('/purposeCard/get', purposeCardGet)
router.put('/purposeCard/update', purposeCardUpdate)

module.exports = router;




const { purposeAdd, purposeGet, purposeUpdate } = require('../controller/build/purpose')
const express = require('express')
router = express.Router();

//  API Router

router.post('/purpose/add', purposeAdd)
router.get('/purpose/get', purposeGet)
router.put('/purpose/update', purposeUpdate)

module.exports = router;




const { applicationsAdd, applicationsGet, applicationsUpdate } = require('../controller/use/applicationsCases')
const express = require('express')
router = express.Router();

//  API Router

router.post('/applications/add', applicationsAdd)
router.get('/applications/get', applicationsGet)
router.put('/applications/update', applicationsUpdate)

module.exports = router;




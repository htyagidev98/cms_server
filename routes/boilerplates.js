const { boilerplatesAdd, boilerplatesGet, boilerplatesUpdate } = require('../controller/press/boilerplates')
const express = require('express')
router = express.Router();

//  API Router

router.post('/boilerplates/add', boilerplatesAdd)
router.get('/boilerplates/get', boilerplatesGet)
router.put('/boilerplates/update', boilerplatesUpdate)

module.exports = router;




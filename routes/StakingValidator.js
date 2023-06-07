const { validatorAdd, validatorGet, validatorUpdate } = require('../controller/staking/validator')
const express = require('express')
router = express.Router();

//  API Router

router.post('/validator/add', validatorAdd)
router.get('/validator/get', validatorGet)
router.put('/validator/update', validatorUpdate)

module.exports = router;




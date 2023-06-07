const { nominatorAdd, nominatorGet, nominatorUpdate } = require('../controller/staking/nominator')
const express = require('express')
router = express.Router();

//  API Router

router.post('/nominator/add', nominatorAdd)
router.get('/nominator/get', nominatorGet)
router.put('/nominator/update', nominatorUpdate)

module.exports = router;




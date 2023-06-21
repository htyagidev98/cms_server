const { teamAdd, teamGet, teamUpdate } = require('../controller/team/team')
const express = require('express')
router = express.Router();

//  API Router

router.post('/team/add', teamAdd)
router.get('/team/get', teamGet)
router.put('/team/update', teamUpdate)

module.exports = router;




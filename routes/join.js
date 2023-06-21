const { joinAdd, joinGet, joinUpdate } = require('../controller/team/join')
const express = require('express')
router = express.Router();

//  API Router

router.post('/join/add', joinAdd)
router.get('/join/get', joinGet)
router.put('/join/update', joinUpdate)

module.exports = router;




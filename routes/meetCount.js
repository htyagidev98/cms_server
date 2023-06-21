const { meetCountAdd, meetCountGet, meetCountUpdate } = require('../controller/team/meetCount')
const express = require('express')
router = express.Router();

//  API Router

router.post('/meet/count/add', meetCountAdd)
router.get('/meet/count/get', meetCountGet)
router.put('/meet/count/update', meetCountUpdate)

module.exports = router;




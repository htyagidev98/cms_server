const { eventAdd, eventGet, eventUpdate } = require('../controller/upcoming-events/event')
const express = require('express')
router = express.Router();

//  API Router

router.post('/event/add', eventAdd)
router.get('/event/get', eventGet)
router.put('/event/update', eventUpdate)

module.exports = router;




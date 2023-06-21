const { advisorsAdd, advisorsGet, advisorsUpdate } = require('../controller/team/advisors')
const express = require('express')
router = express.Router();

//  API Router

router.post('/advisors/add', advisorsAdd)
router.get('/advisors/get', advisorsGet)
router.put('/advisors/update', advisorsUpdate)

module.exports = router;




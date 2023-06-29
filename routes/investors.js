const { investorsAdd, investorsGet, investorsUpdate } = require('../controller/press/investors')
const express = require('express')
router = express.Router();


// API Router
router.post('/investors/add', investorsAdd)
router.get('/investors/get', investorsGet)
router.put('/investors/update', investorsUpdate)

module.exports = router;
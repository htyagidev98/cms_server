const { additionalAdd, additionalGet, additionalUpdate } = require('../controller/dev/additional')
const express = require('express')
router = express.Router();


// API Router
router.post('/additional/add', additionalAdd)
router.get('/additional/get', additionalGet)
router.put('/additional/update', additionalUpdate)

module.exports = router;
const { brandAdd, brandGet, brandUpdate } = require('../controller/press/brand')
const express = require('express')
router = express.Router();


// API Router
router.post('/brand/add', brandAdd)
router.get('/brand/get', brandGet)
router.put('/brand/update', brandUpdate)

module.exports = router;
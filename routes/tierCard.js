const { tierCardAdd, tierCardGet, tierCardUpdate } = require('../controller/build/tierCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/tierCard/add', tierCardAdd)
router.get('/tierCard/get', tierCardGet)
router.put('/tierCard/update', tierCardUpdate)

module.exports = router;




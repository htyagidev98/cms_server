const { resourceCardAdd, resourceCardGet, resourceCardUpdate } = require('../controller/build/resourceCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/resourceCard/add', resourceCardAdd)
router.get('/resourceCard/get', resourceCardGet)
router.put('/resourceCard/update', resourceCardUpdate)

module.exports = router;




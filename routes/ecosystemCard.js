const { ecosystemCardAdd, ecosystemCardGet, ecosystemCardUpdate } = require('../controller/ecosystem/ecosystemCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/ecosystemCard/add', ecosystemCardAdd)
router.get('/ecosystemCard/get', ecosystemCardGet)
router.put('/ecosystemCard/update', ecosystemCardUpdate)

module.exports = router;




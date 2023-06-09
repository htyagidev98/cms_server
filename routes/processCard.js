const { processCardAdd, processCardGet, processCardUpdate } = require('../controller/build/processCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/process/card/add', processCardAdd)
router.get('/process/card/get', processCardGet)
router.put('/process/card/update', processCardUpdate)

module.exports = router;




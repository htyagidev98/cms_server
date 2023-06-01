const { paragraphAdd, paragraphGet,paragraphUpdate } = require('../controller/explore/paragraph')
const express = require('express')
router = express.Router();

//  API Router

router.post('/paragraph/add', paragraphAdd)
router.get('/paragraph/get', paragraphGet)
router.put('/paragraph/update', paragraphUpdate)

module.exports = router;




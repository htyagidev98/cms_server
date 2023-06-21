const { cardinalAdd, cardinalGet, cardinalUpdate } = require('../controller/team/cardinal')
const express = require('express')
router = express.Router();

//  API Router

router.post('/cardinal/add', cardinalAdd)
router.get('/cardinal/get', cardinalGet)
router.put('/cardinal/update', cardinalUpdate)

module.exports = router;




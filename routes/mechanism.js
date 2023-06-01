const { mechanismAdd, mechanismGet, mechanismUpdate } = require('../controller/utility/mechanism')
const express = require('express')
router = express.Router();

//  API Router

router.post('/mechanism/add', mechanismAdd)
router.get('/mechanism/get', mechanismGet)
router.put('/mechanism/update', mechanismUpdate)

module.exports = router;




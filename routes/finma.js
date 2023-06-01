const { finmaAdd, finmaGet, finmaUpdate } = require('../controller/utility/finma')
const express = require('express')
router = express.Router();

//  API Router

router.post('/finma/add', finmaAdd)
router.get('/finma/get', finmaGet)
router.put('/finma/update', finmaUpdate)

module.exports = router;




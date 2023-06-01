const { metricsAdd, metricsGet, metricsUpdate } = require('../controller/utility/metrics')
const express = require('express')
router = express.Router();

//  API Router

router.post('/metrics/add', metricsAdd)
router.get('/metrics/get', metricsGet)
router.put('/metrics/update', metricsUpdate)

module.exports = router;




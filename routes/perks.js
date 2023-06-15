const { perksAdd, perksGet, perksUpdate } = require('../controller/ambassador/perks')
const express = require('express')
router = express.Router();

//  API Router

router.post('/perks/add', perksAdd)
router.get('/perks/get', perksGet)
router.put('/perks/update', perksUpdate)

module.exports = router;




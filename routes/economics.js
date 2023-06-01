const { economicsAdd, economicsGet, economicsUpdate } = require('../controller/utility/economics')
const express = require('express')
router = express.Router();

//  API Router

router.post('/economics/add', economicsAdd)
router.get('/economics/get', economicsGet)
router.put('/economics/update', economicsUpdate)

module.exports = router;




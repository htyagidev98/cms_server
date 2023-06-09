const { considerationAdd, considerationGet, considerationUpdate } = require('../controller/build/consideration')
const express = require('express')
router = express.Router();

//  API Router

router.post('/consideration/add', considerationAdd)
router.get('/consideration/get', considerationGet)
router.put('/consideration/update', considerationUpdate)

module.exports = router;




const { criteriaCardAdd, criteriaCardGet, criteriaCardUpdate } = require('../controller/build/criteriaCard')
const express = require('express')
router = express.Router();


// API Router

router.post('/criteria/card/add', criteriaCardAdd)
router.get('/criteria/card/get', criteriaCardGet)
router.put('/criteria/card/update', criteriaCardUpdate)

module.exports = router;






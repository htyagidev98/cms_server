const {casesAnimatedAdd,casesAnimatedGet,casesAnimatedUpdate } = require('../controller/use/casesanimated')
const express = require('express')
router = express.Router();

//  API Router

router.post('/cases/animated/add', casesAnimatedAdd)
router.get('/cases/animated/get', casesAnimatedGet)
router.put('/cases/animated/update', casesAnimatedUpdate)

module.exports = router;

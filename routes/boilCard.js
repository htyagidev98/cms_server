const { boilCardAdd, boilCardGet, boilCardUpdate } = require('../controller/press/boilCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/boil/card/add', boilCardAdd)
router.get('/boil/card/get', boilCardGet)
router.put('/boil/card/update', boilCardUpdate)

module.exports = router;




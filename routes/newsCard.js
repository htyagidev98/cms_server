const { newsCardAdd, newsCardGet, newsCardUpdate } = require('../controller/community-page/newsCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/news/card/add', newsCardAdd)
router.get('/news/card/get', newsCardGet)
router.put('/news/card/update', newsCardUpdate)

module.exports = router;




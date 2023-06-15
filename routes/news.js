const { newsAdd, newsGet, newsUpdate } = require('../controller/community-page/news')
const express = require('express')
router = express.Router();

// API Router


router.post('/news/add', newsAdd)
router.get('/news/get', newsGet)
router.put('/news/update', newsUpdate)

module.exports = router;
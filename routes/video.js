const { videoAdd, videoGet, videoUpdate } = require('../controller/community-page/video')
const express = require('express')
router = express.Router();

//  API Router

router.post('/video/add', videoAdd)
router.get('/video/get', videoGet)
router.put('/video/update', videoUpdate)

module.exports = router;




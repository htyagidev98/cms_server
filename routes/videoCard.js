const { videoCardAdd, videoCardGet, videoCardUpdate } = require('../controller/community-page/videoCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/video/card/add', videoCardAdd)
router.get('/video/card/get', videoCardGet)
router.put('/video/card/update', videoCardUpdate)

module.exports = router;




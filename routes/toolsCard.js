const { toolsCardAdd, toolsCardGet, toolsCardUpdate } = require('../controller/dev/toolsCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/tools/card/add', toolsCardAdd)
router.get('/tools/card/get', toolsCardGet)
router.put('/tools/card/update', toolsCardUpdate)

module.exports = router;




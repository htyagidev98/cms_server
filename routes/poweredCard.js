const { poweredCardAdd, poweredCardGet, poweredCardUpdate } = require('../controller/dev/poweredCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/powered/card/add', poweredCardAdd)
router.get('/powered/card/get', poweredCardGet)
router.put('/powered/card/update', poweredCardUpdate)

module.exports = router;




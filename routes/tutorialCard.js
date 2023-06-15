const { tutorialCardAdd, tutorialCardGet, tutorialCardUpdate } = require('../controller/dev/tutorialCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/tutorial/card/add', tutorialCardAdd)
router.get('/tutorial/card/get', tutorialCardGet)
router.put('/tutorial/card/update', tutorialCardUpdate)

module.exports = router;




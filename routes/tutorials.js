const { tutorialAdd, tutorialGet, tutorialUpdate } = require('../controller/dev/tutorials')
const express = require('express')
router = express.Router();


// API Router

router.post('/tutorial/add', tutorialAdd)
router.get('/tutorial/get', tutorialGet)
router.put('/tutorial/update', tutorialUpdate)

module.exports = router;
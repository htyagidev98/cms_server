const { profileCardAdd, profileCardGet, profileCardUpdate } = require('../controller/press/profileCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/profile/card/add', profileCardAdd)
router.get('/profile/card/get', profileCardGet)
router.put('/profile/card/update', profileCardUpdate)

module.exports = router;




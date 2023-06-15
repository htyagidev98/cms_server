const { profileAdd, profileGet, profileUpdate } = require('../controller/press/profile')
const express = require('express')
router = express.Router();

//  API Router

router.post('/profile/add', profileAdd)
router.get('/profile/get', profileGet)
router.put('/profile/update', profileUpdate)

module.exports = router;




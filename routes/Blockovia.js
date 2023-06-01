const { blockoviaAdd, blockoviaGet, blockoviaUpdate } = require('../controller/explore/Blockovia')
const express = require('express')
router = express.Router();

//  API Router

router.post('/blockovia/add', blockoviaAdd)
router.get('/blockovia/get', blockoviaGet)
router.put('/blockovia/update', blockoviaUpdate)

module.exports = router;




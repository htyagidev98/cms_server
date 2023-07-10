const { faqGenralAdd, faqGenralGet, faqGenralUpdate, } = require('../controller/faq/faqGenral')
const express = require('express')
router = express.Router();


// API Router


router.post('/faq/genral/add', faqGenralAdd)
router.get('/faq/genral/get', faqGenralGet)
router.put('/faq/genral/update', faqGenralUpdate)

module.exports = router;
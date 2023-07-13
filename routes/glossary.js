const { glossaryAdd, glossaryGet, glossaryUpdate } = require('../controller/faq/glossary')
const express = require('express')
router = express.Router();

//  API Router

router.post('/glossary/add', glossaryAdd)
router.get('/glossary/get', glossaryGet)
router.put('/glossary/update', glossaryUpdate)

module.exports = router;




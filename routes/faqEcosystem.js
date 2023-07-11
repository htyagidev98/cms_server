const { faqEcosystemAdd, faqEcosystemGet, faqEcosystemUpdate } = require('../controller/faq/faqEcosystem')
const express = require('express')
router = express.Router();


// API Router

router.post('/faq/ecosystem/add', faqEcosystemAdd)
router.get('/faq/ecosystem/get', faqEcosystemGet)
router.put('/faq/ecosystem/update', faqEcosystemUpdate)

module.exports = router;
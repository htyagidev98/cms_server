const { roadmapAdd, roadmapGet, roadmapUpdate } = require('../controller/roadmap/roadmap')
const express = require('express')
const router = express.Router();

//  API Router

router.post('/roadmap/add', roadmapAdd)
router.get('/roadmap/get', roadmapGet)
router.put('/roadmap/update', roadmapUpdate)

module.exports = router;




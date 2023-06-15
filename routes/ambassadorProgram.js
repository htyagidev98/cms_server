const { ambassadorProgramAdd, ambassadorProgramGet, ambassadorProgramUpdate } = require('../controller/ambassador/ambassadorProgram')
const express = require('express')
router = express.Router();

//  API Router

router.post('/ambassador/program/add', ambassadorProgramAdd)
router.get('/ambassador/program/get', ambassadorProgramGet)
router.put('/ambassador/program/update', ambassadorProgramUpdate)

module.exports = router;




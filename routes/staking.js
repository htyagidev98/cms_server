const { stakingContentAdd, stakingContentGet, stakingContentUpdate } = require('../controller/staking/staking')
const express = require('express')
router = express.Router();


// API Router

router.post('/staking/content/add', stakingContentAdd)
router.get('/staking/content/get', stakingContentGet)
router.put('/staking/content/update', stakingContentUpdate)

module.exports = router;

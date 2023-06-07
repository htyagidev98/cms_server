const { stakingCardAdd, stakingCardGet, stakingCardUpdate } = require('../controller/staking/stakingcard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/staking/card/add', stakingCardAdd)
router.get('/staking/card/get', stakingCardGet)
router.put('/staking/card/update', stakingCardUpdate)

module.exports = router;




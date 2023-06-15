const { perksCardAdd, perksCardGet, perksCardUpdate } = require('../controller/ambassador/perksCard')
const express = require('express')
router = express.Router();

//  API Router

router.post('/perks/card/add', perksCardAdd)
router.get('/perks/card/get', perksCardGet)
router.put('/perks/card/update', perksCardUpdate)

module.exports = router;




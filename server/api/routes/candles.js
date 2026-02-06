const express = require('express')
const router = express.Router();
const candlesController = require('../controllers/candles');

router.get('/', candlesController.getAllCandles);
router.post('/', candlesController.createCandle)
router.put('/:id', candlesController.updateCandle)
router.delete('/:id', candlesController.deleteCandle)










module.exports = router;
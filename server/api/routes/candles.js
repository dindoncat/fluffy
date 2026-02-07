const express = require('express')
const router = express.Router();
const candlesController = require('../controllers/candles');
const auth = require('../../middleware/auth'); // Import the auth middleware

router.get('/', candlesController.getAllCandles);
router.post('/', auth, candlesController.createCandle) // Protected
router.put('/:id', auth, candlesController.updateCandle) // Protected
router.delete('/:id', auth, candlesController.deleteCandle) // Protected










module.exports = router;
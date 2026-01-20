const express = require('express')
const router = express.Router();
const dollsController = require('../controllers/dolls');

router.get('/', dollsController.getAllDolls);


module.exports = router;
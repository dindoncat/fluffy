const express = require('express')
const router = express.Router();
const dollsController = require('../controllers/dolls');

router.get('/', dollsController.getAllDolls);
router.post('/', dollsController.createDoll)
router.put('/:id', dollsController.updateDoll)
router.delete('/:id', dollsController.deleteDoll)




module.exports = router;
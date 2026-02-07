const express = require('express')
const router = express.Router();
const dollsController = require('../controllers/dolls');
const auth = require('../../middleware/auth'); // Import the auth middleware

router.get('/', dollsController.getAllDolls);
router.post('/', auth, dollsController.createDoll) // Protected
router.put('/:id', auth, dollsController.updateDoll) // Protected
router.delete('/:id', auth, dollsController.deleteDoll) // Protected


module.exports = router;
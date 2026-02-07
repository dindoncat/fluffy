const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');


router.get('/', userControllers.getAllUsers);
router.post('/', userControllers.createUser);
router.post('/login', userControllers.login);
router.post('/signup', userControllers.signUp);
router.post('/logout', userControllers.logout);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);


module.exports = router;
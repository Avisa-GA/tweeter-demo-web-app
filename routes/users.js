
const router = require('express').Router();
const userCtrl = require('../controllers/users');

// GET /users
router.get('/users', userCtrl.index);

// Update /users
router.put('/:id', userCtrl.updateUser)

// Edit
// router.get('/:id/edit', userCtrl.editUser)

module.exports = router;
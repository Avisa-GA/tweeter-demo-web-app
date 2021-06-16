
const router = require('express').Router();
const userCtrl = require('../controllers/users');

// GET /users
router.get('/users', userCtrl.index);

// Delete / users/:id
router.delete('/users/:id', userCtrl.deleteUser)

// Update /users
router.put('/profile/:id', userCtrl.updateUser)

// Edit
// router.get('/profile/:id/edit', userCtrl.editUser)

module.exports = router;
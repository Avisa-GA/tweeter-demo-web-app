
const router = require('express').Router();
const userCtrl = require('../controllers/users');

// GET /users
router.get('/users', isLoggedIn, userCtrl.index);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google'); // login or you can change this to another location
}

// Delete / users/:id
router.delete('/users/:id', userCtrl.deleteUser)

// Update /users
router.put('/profile/:id', userCtrl.updateUser)

// Edit
// router.get('/profile/:id/edit', userCtrl.editUser)

module.exports = router;
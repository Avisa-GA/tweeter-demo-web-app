
const router = require('express').Router();
const userCtrl = require('../controllers/users');

// GET /students
router.get('/users', userCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
// router.post('/comments', userCtrl.addComment);

// // DELETE /facts/:id
// router.delete('/comments/:id', userCtrl.delComment);

module.exports = router;
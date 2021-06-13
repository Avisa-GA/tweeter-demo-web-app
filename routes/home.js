
const router = require('express').Router()
const homeCtrl = require('../controllers/home')


// Get - home
router.get('/home', homeCtrl.index)

module.exports = router
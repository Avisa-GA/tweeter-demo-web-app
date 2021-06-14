
const router = require('express').Router()
const homeCtrl = require('../controllers/home')


// Get - home
router.get('/home', homeCtrl.index)

// Post / tweet
router.post('/tweets', homeCtrl.addTweet)

// Delete / tweets/:id
router.delete('/tweets/:id', homeCtrl.deleteTweet)

module.exports = router
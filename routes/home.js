
const router = require('express').Router()
const homeCtrl = require('../controllers/home')


// Get - home
router.get('/home', homeCtrl.index)

// Delete / tweets/:id
router.delete('/tweets/:id', homeCtrl.deleteTweet)

// Post / tweet
router.post('/tweets', homeCtrl.addTweet)

router.post('/tweets/:id/comments', homeCtrl.addComments)

module.exports = router
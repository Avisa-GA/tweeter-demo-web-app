
const router = require('express').Router()
const homeCtrl = require('../controllers/home')


// Get - home
router.get('/home', homeCtrl.index)

// Delete / tweets/:id
router.delete('/tweets/:id', homeCtrl.deleteTweet)

// Post / tweet
router.post('/tweets', homeCtrl.addTweet)

// Post / comments
router.post('/tweets/:id/comments', homeCtrl.addComments)

// Post / likes
router.post('/tweets/:id/likes', homeCtrl.addLikes)

module.exports = router
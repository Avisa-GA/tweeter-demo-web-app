
const router = require('express').Router()
const homeCtrl = require('../controllers/home')


// Get - home
router.get('/home', homeCtrl.index)

// Delete / tweets/:id
router.delete('/home/:id', homeCtrl.deleteTweet)

// Post / tweet
router.post('/home', homeCtrl.addTweet)

router.post('/home/:id/comments', homeCtrl.addComments)

module.exports = router
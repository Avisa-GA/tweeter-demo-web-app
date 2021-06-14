
const Tweet = require('../models/tweet')

module.exports = {
    index,
    addTweet,
    deleteTweet
}

function index(req, res) {
    Tweet.find({}, function(err, tweets) {
        res.render('home/index', {
            tweets,
            user: req.user
        })
    })
}

function addTweet(req, res) {
    req.body.createdBy = req.user._id
    Tweet.create(req.body)
    res.redirect('/home')
}

function deleteTweet(req, res) {
      Tweet.findByIdAndDelete(req.params.id)
      res.redirect('/home')
}
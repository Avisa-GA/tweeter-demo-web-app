
const Tweet = require('../models/tweet')

module.exports = {
    index
}

function index(req, res) {
    Tweet.find({ createdBy: req.params.id}, function(err, tweets) {
        res.render('home/index', {
            tweets,
            user: req.user
        })
    })
}

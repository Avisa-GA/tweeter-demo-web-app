
const User = require('../models/user')

module.exports = {
    index
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', { 
            users,
            user: req.user
         })
    })
}


function showTweet(req, res) {

}


function addComment(req, res) {
  
}

function delComment(req, res) {

}


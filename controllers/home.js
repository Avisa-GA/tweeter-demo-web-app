
const Tweet = require('../models/tweet')
const cloudinary = require('cloudinary').v2

module.exports = {
    index,
    deleteTweet,
    addTweet,
    addComments
}

function index(req, res) {
    Tweet.find({}, function(err, tweets) {
        res.render('home/index', {
            tweets,
            user: req.user
        })
    })
}

function deleteTweet(req, res) {
    Tweet.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/home')
    })
}

function addTweet(req, res) {
    req.body.createdBy = req.user._id
    const photo = req.files.coverPhoto;
    console.log(photo)
    photo.mv(`./uploads/${photo.name}`)
    const result = cloudinary.uploader.upload(`./uploads/${photo.name}`)
    req.body.coverPhoto = result.name
    Tweet.create(req.body)
    res.redirect('/home')
}


function addComments(req, res) {
    Tweet.findById(req.params.id, (err, tweet) => {
        tweet.comments.push(req.body)
        tweet.save(() => {
             res.redirect(`/home`)
        })
    })
}
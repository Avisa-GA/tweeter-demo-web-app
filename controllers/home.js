const Tweet = require('../models/tweet')
const cloudinary = require('cloudinary').v2

module.exports = {
    index,
    deleteTweet,
    addTweet,
    addComments
}

function index(req, res) {
    Tweet.find({}, function (err, tweets) {
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

async function addTweet(req, res) {
    try {
        req.body.createdBy = req.user._id
        const photo = req.files.coverPhoto;
        photo.mv(`./uploads/${photo.name}`)
        const result = await cloudinary.uploader.upload(`./uploads/${photo.name}`)
        req.body.coverPhoto = result.secure_url
        const tweet = await Tweet.create(req.body)
        res.redirect(`/home`)
    } catch (err) {
        console.log(err)
        res.redirect('/home')
    }
}


async function addComments(req, res) {
    try {
        const tweet = await Tweet.findById(req.params.id)
        tweet.comments.push(req.body)
        await tweet.save(() => {
            res.redirect(`/home`)
        })
    } catch (err) {
        console.log(err)
        res.redirect('/home')
    }

}
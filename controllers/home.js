const Tweet = require('../models/tweet')
const cloudinary = require('cloudinary').v2

module.exports = {
    index,
    deleteTweet,
    addTweet,
    addComments
}

async function index(req, res) {
    try {
        const tweets = await Tweet.find({})
        res.render('home/index.ejs', {
            tweets,
            user: req.user
        })
        
    } catch (err) {
        console.log(err)
        res.redirect('/home')
    }
}

async function deleteTweet(req, res) {
    try {
        await Tweet.findByIdAndRemove(req.params.id)
        res.redirect('/home')
    } catch (err) {
        console.log(err)
        res.redirect('/home')
    }

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
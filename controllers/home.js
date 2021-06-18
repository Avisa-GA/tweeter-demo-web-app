const Tweet = require('../models/tweet')
const cloudinary = require('cloudinary').v2
let axios = require('axios');
let API_KEY = process.env.NEWS_API_KEY
let BASE_URL = 'https://content.guardianapis.com/search'

module.exports = {
    index,
    deleteTweet,
    addTweet,
    addComments,
    addLikes
}

async function index(req, res) {
    try {
        const {
            data
        } = await axios.get(`${BASE_URL}?q=headline&api-key=${API_KEY}`);
        const tweets = await Tweet.find({}).populate('createdBy');
        res.render('home/index.ejs', {
            tweets,
            currentUser: req.user,
            news: data.response.results
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
        await Tweet.create(req.body)
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

async function addLikes(req, res) {
    try {

        // find article by id but also if the user has not liked it
        const tweet = await Tweet.findOne({
            _id: req.params.id,
            likes: {
                $nin: [req.body._id]
            }
        })
        if (!tweet) return res.redirect('/home')
        // article found! Add user's id to likes array (in memory)
        tweet.likes.push(req.body._id)
        // commit changes to DB
        await tweet.save(() => {
            res.redirect('/home')
        });

    } catch (err) {
        console.log(err)
        
    }
}
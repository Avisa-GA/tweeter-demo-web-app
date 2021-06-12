
const mongoose = require('mongoose')
const Tweet = require('./tweet')

const userSchema = new mongoose.Schema( {
    name: String,
    bio: String,
    email: String,
    avatarURL: String,
    googleId: String,
    tweets: [Tweet]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User
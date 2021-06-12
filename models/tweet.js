

const mongoose = require('mongoose')
const User = require('./user')

const commentSchema = new Schema( {
    content: String
}, { timestamps: true })

const tweetSchema = mongoose.Schema( {
     description: String,
     image: String,
     emoji: String,
     user: User,
     comments: [commentSchema]
}, {
    timestamps: true
})

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet
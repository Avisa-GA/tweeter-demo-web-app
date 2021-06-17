
const mongoose = require('mongoose')
const commentSchema = require('./comment.js')
const Schema = mongoose.Schema

// ? tweets
// ===============
const tweetSchema = new mongoose.Schema( {
    content: String,
    image: String,
    coverPhoto: String,
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [commentSchema],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
   timestamps: true
})

module.exports = mongoose.model('Tweet', tweetSchema)
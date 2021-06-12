

const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema( {
     description: String,
     image: String,
     emoji: String,
     user: {
         type: Schema.Types.ObjectId,
         ref: 'User'
     }
}, {
    timestamps: true
})

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet
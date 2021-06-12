
const mongoose = require('mongoose')


// ? tweets
// ===============
const tweetSchema = mongoose.Schema( {
    description: String,
    image: String,
    emoji: String,
    comments: [commentSchema],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
   timestamps: true
})

module.exports = mongoose.model('Tweet', tweetSchema)
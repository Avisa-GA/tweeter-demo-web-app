
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
    name: String,
    bio: String,
    email: String,
    avatarURL: String,
    googleId: String,
    tweets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User

const mongoose = require('mongoose')

// ? users
// ===============
const userSchema = new mongoose.Schema( {
    name: String,
    bio: String,
    email: String,
    avatarURL: String,
    googleId: String
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User
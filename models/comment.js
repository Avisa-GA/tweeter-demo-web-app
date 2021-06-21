
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//  ? comments
// ===============
module.exports = new mongoose.Schema( {
    content: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })
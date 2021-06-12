
const mongoose = require('mongoose')

//  ? comments
// ===============
module.exports = new mongoose.Schema( {
    content: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })
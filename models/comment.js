
const mongoose = require('mongoose')

//  ? comments
// ===============
const commentSchema = new mongoose.Schema( {
    content: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })
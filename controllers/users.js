const User = require('../models/user')
const cloudinary = require('cloudinary').v2

module.exports = {
    index,
    updateUser
}

async function index(req, res) {
    try {
        const users = await User.find({})
        res.render('users/index', {
            users,
            user: req.user
        })
    } catch (err) {
        console.log(err)
    }
}

async function updateUser(req, res) {
    
    try {
        await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.redirect('/users')
    } catch (err) {
        console.log(err)
        res.redirect('/users')

    }
}



async function editUser(req, res) {
    try {

        const user = await User.findById(req.params.id)
        res.render('users/index', {
            user
        })
        res.render('/users')

    } catch (err) {
        console.log(err)
        res.render('/users')
    }
}
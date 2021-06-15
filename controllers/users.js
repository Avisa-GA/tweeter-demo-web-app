const User = require('../models/user')

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
        await Tweet.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.redirect(`/users`)
    } catch (err) {
        console.log(err)
        res.redirect('/users')

    }
}

// async function showUser(req, res) {
//     try {

//         const user = await User.findById(req.params.id)
//         res.render('users/index', {
//             user
//         })

//     } catch (err) {
//         console.log(err)
//         res.redirect('/users')
//     }
// }

// async function editUser(req, res) {
//     try {

//         const user = await User.findById(req.params.id)
//         res.render('users/index', {
//             user
//         })

//     } catch (err) {
//         console.log(err)
//         res.render('/users')
//     }
// }
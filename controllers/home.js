
// DEPENDENCIES
const router = require('express').Router()
const passport = require('passport')


router.get('/', (req, res) => {
     try {
          res.render('index')
     } catch (err) {
          console.log('error due to show home page:', err)
          res.redirect('/')
     }
})

// ============================
// TODO LOGIN
// ============================
// * login Route

router.get('/auth/google', passport.authenticate('google', {
     scope:['profile', 'email']
}))


// ^ callback route - called back/requested after user logs in
router.get('/oauth2callback', passport.authenticate('google', {
     successRedirect: '/users',
     failureRedirect: '/'
}))

// & logout route
router.get('/logout', function(req, res) {
     req.logOut() // ! destroy the login session from the session store
     res.redirect('/') // ! send the user back to homepage
})

module.exports = router
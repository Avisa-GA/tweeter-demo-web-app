
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user')

// ^ passport.use <-- We use this to plug-in login option
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {
    // a user attempted a login
    // does this user already exist in our db?
    // if they don't we create then
    User.findOne({
        googleId: profile.id
    }, function (err, user) {
        // * check for and handle errors
        if (err) return cb(err)
        // & if user exist in our db, logged them in
        if (user) {
            return cb(null, user)
        } else {
            //  ^ student doesn't exist, create the instead
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            })

            newUser.save(function (err) {
                if (err) return cb(err)
                // TODO user saved successfuly
                return cb(null, newUser)
            })
        }
    })

}))

// & passport.serializeUser <-- gets called one time when the user logs in to create a session
// * Session Storage & Cookie
passport.serializeUser(function(user, done) {
    done(null, user.id)
})

// ! passport.deserializeUser <-- get called with each request - then decodes the cookie and looks up the user in session store create req.user for us

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user) // ? create req.user
    })
})
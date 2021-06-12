
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

// ^ passport.use <-- We use this to plug-in login option
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb) {
    // a user attempted a login
    // does this user already exist in our db?
    // if they don't we create then

}))

// & passport.serializeUser <-- gets called one time when the user logs in to create a session

// ! passport.deserializeUser <-- get called with each request - then decodes the cookie and looks up the user in session store create req.user for us

// ? 
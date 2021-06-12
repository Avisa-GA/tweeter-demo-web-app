
require('dotenv').config()

// ==================
// DEPENDENCIES
// ==================
const express = require('express')
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override')
const logger = require('morgan')
const session = require('express-session')
const passport = require('passport')

// INITIALIZE EXPRESS
const app = express()

// ==================
// CONFIGURE MONGOOSE
// ==================
// & connect to the MongoDB with mongoose
require('./config/database')
// ! initialize oauth process for login requests
require('./config/passport')

// =====================
// MIDDLEWARES
// =====================
// SET DEFAULT VIEW ENGINE

app.set('view engine', 'ejs')

// =========================
// MOUNT MIDDLEWARE
// =========================

app.use(express.urlencoded( { extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(session({
    secret: 'TWEETERDemo',
    resave: false,
    saveUninitialized: true
}))


// TODO Add PASSPORT middleware here
// =======================
app.use(passport.initialize())
app.use(passport.session())


// _________________________
// ^ ADDING CONTROLLERS



// =======================
// ROUTES
// =======================


// ======================
// LISTENER
// ======================

// TELL EXPRESS TO LISTEN
app.listen(PORT, () => {
    console.log('Express is listening on port:', PORT);
})
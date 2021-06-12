
const mongoose = require('mongoose')

const router = require('express').Router()

router.get('/', (req, res) => {
     try {
          res.render('index')
     } catch (err) {
          console.log('error due to show home page:', err)
          res.redirect('/home')
     }
})

module.exports = router
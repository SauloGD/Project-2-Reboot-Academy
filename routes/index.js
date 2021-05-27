const router = require('express').Router()

//const volunteerRouter = require('./volunteers.router')
const authRouter = require('./auth.router')

//router.use('/volunteer', volunteerRouter)
router.use('/auth', authRouter)

module.exports = router
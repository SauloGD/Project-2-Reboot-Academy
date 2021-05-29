const router = require('express').Router()

const userRouter = require('./user.router')
const authRouter = require('./auth.router')

//router.use('/volunteer', volunteerRouter)
router.use('/auth', authRouter)
router.use('/user',userRouter)

module.exports = router
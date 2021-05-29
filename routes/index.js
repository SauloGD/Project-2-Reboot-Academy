const router = require('express').Router()

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const establishmentRouter = require('./establishment.router')


//router.use('/volunteer', volunteerRouter)
router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use('/establishment', establishmentRouter)


module.exports = router
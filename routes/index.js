const router = require('express').Router()

const userRouter = require('./user.router')
const authRouter = require('./auth.router')
const establishmentRouter = require('./establishment.router')
const bookingRouter = require('./booking.router')
const officialRegisterRouter = require('./officialRegister.router')
const promotionRouter = require('./promotion.router')




router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use('/establishment', establishmentRouter)
router.use('/booking', bookingRouter)
router.use('/officialRegister', officialRegisterRouter)
router.use('/promotion', promotionRouter)



module.exports = router
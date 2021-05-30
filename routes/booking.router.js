const jwt = require('jsonwebtoken')
const bookingRouter = require('express').Router()

const {createBooking, deleteBooking, getOneBookingByAdmin, getAllBookingByAdmin, getOneBookingByUser, getAllBookingByUser} = require('../controllers/booking.controllers')

bookingRouter.post("/", createBooking)
bookingRouter.delete("/:bookingId", deleteBooking)
bookingRouter.get("/", getAllBookingByAdmin)
bookingRouter.get("/me", auth, getAllBookingByUser)
bookingRouter.get("/:bookingId", getOneBookingByAdmin)
bookingRouter.get("/me/:bookingId", auth, getOneBookingByUser)







function auth(req, res, next) {

    jwt.verify(
      req.headers.token, 
      process.env.SECRET, 
      (err, insideToken) => {
        if (err) res.json('Token not valid')
        res.locals.id = insideToken.id
        next()
    })
  }
  
function admin(req, res, next) {

  jwt.verify(
    req.headers.token, 
    process.env.SECRET, 
    (err, insideToken) => {
      if (err) res.json('Token not valid')
      console.log(insideToken.admin)
      if (insideToken.admin === true){
          res.locals.id = insideToken.id
          next()
        }else{
          res.json('No eres Admin')   
        }
  })
}

module.exports = bookingRouter
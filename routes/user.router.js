const jwt = require('jsonwebtoken')
const userRouter = require('express').Router()

const {readOneUserByAdmin, readMyUser} = require('../controllers/user.controllers')

userRouter.get('/me' , readMyUser)  // Comprobar
userRouter.get('/:id' , readOneUserByAdmin)

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

module.exports = userRouter
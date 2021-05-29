const jwt = require('jsonwebtoken')
const userRouter = require('express').Router()

const {readOneUserByAdmin, readMyUser, updateMyUser, deleteUserById, getAllUsersByAdmin} = require('../controllers/user.controllers')

userRouter.get('/me' , auth, readMyUser)  // Comprobar
userRouter.get('/' , auth, getAllUsersByAdmin)
userRouter.get('/:userId' , auth, readOneUserByAdmin)
userRouter.put('/me' , auth, updateMyUser)
userRouter.delete('/:userId' , auth, deleteUserById)

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
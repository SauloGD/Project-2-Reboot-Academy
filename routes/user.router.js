const jwt = require('jsonwebtoken')
const userRouter = require('express').Router()

const {readOneUserByAdmin, readMyUser, updateMyUser, deleteUserById, getAllUsersByAdmin} = require('../controllers/user.controllers')

userRouter.get('/me' , auth, readMyUser)  // Comprobar
userRouter.get('/' , auth, admin, getAllUsersByAdmin)
userRouter.get('/:userId' , auth,admin, readOneUserByAdmin)
userRouter.put('/me' , auth, updateMyUser)
userRouter.delete('/:userId' , auth, admin, deleteUserById)

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



module.exports = userRouter
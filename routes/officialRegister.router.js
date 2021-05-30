const jwt = require('jsonwebtoken')
const officialRegisterRouter = require('express').Router()



const { createOfficialRegister, readOneOfficialRegister, getAllOfficialRegister, deleteOfficialRegisterById, updateOfficialRegisterById} = require('../controllers/officialRegister.controllers')

officialRegisterRouter.post('/', auth, admin, createOfficialRegister)
officialRegisterRouter.get('/', auth,admin, getAllOfficialRegister)
officialRegisterRouter.get('/:officialRegisterId', auth,admin, readOneOfficialRegister)
officialRegisterRouter.delete('/:officialRegisterId', auth, admin,  deleteOfficialRegisterById)
officialRegisterRouter.put('/:officialRegisterId', auth, admin,  updateOfficialRegisterById)





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


module.exports = officialRegisterRouter

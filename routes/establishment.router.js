const jwt = require('jsonwebtoken')
const establishmentRouter = require('express').Router()

const { createEstablishment, readOneEstablishment, getAllestablishment, deleteEstablishmentById, updateEstablishmentById} = require('../controllers/establishment.controllers')

establishmentRouter.post('/', auth, createEstablishment)
establishmentRouter.get('/', auth, getAllestablishment)
establishmentRouter.get('/:establishmentId', auth, readOneEstablishment)
establishmentRouter.delete('/:establishmentId', auth, deleteEstablishmentById)
establishmentRouter.put('/:establishmentId', auth, updateEstablishmentById)




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
  
  /*function admin(req, res, next) {

    jwt.verify(
      req.headers.token, 
      process.env.SECRET, 
      (err, insideToken) => {
        if (err) res.json('Token not valid')
        console.log(req.headers.admin)
        if (req.headers.admin === true){
            res.locals.id = insideToken.id
        }else{
            console.log('No eres Admin')   
        }
        next()
    })
  }*/


  module.exports = establishmentRouter
const jwt = require('jsonwebtoken')
const establishmentRouter = require('express').Router()


const {updateCategoryById, readOneCategory} = require('../controllers/category.controllers')
const { createEstablishment, readOneEstablishment, getAllestablishment, deleteEstablishmentById, updateEstablishmentById} = require('../controllers/establishment.controllers')

establishmentRouter.post('/', auth, admin, createEstablishment)
establishmentRouter.get('/', auth, getAllestablishment)
establishmentRouter.get('/:establishmentId', auth, readOneEstablishment)
establishmentRouter.delete('/:establishmentId', auth, admin,  deleteEstablishmentById)
establishmentRouter.put('/:establishmentId', auth, admin, updateEstablishmentById)
establishmentRouter.get('/:establishmentId/category',auth, readOneCategory)



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


  module.exports = establishmentRouter


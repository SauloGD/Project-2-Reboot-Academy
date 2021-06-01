const jwt = require('jsonwebtoken')
const promotionRouter = require('express').Router()


const { createPromotion, readOnePromotion, getAllPromotion, deletePromotionById, addPromotionToUsers, getAllPromotionByUser, readOnePromotionByUser} = require('../controllers/promotion.controllers')

promotionRouter.post('/', auth, admin, createPromotion)
promotionRouter.get('/', auth, admin, getAllPromotion)
promotionRouter.get('/me',auth , getAllPromotionByUser)
promotionRouter.get('/me/:promotionId',auth , readOnePromotionByUser)
promotionRouter.get('/:promotionId', auth, admin, readOnePromotion)
promotionRouter.put('/:promotionId/user/:userId', auth, admin, addPromotionToUsers)
promotionRouter.delete('/:promotionId', auth, admin,  deletePromotionById)




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


  module.exports = promotionRouter
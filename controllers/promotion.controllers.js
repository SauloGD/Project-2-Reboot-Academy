const promotionModel = require('../models/promotion.model')
const { populate } = require('../models/user.model')
const userModel = require('../models/user.model')

function readOnePromotion (req, res){
    promotionModel.findById(req.params.promotionId)
    .populate("establishmentId")
    .then ((promotion) => {
       res.json(promotion)
    })
    .catch((err) => {
        res.json(err)
    })
}




function getAllPromotion (req,res){
    promotionModel.find()
    .populate("establishmentId")
    .then ((promotion) => {
        res.json(promotion)
    })
    .catch((err) => {
        res.json(err)
    })
}

function readOnePromotionByUser (req, res){
    userModel.findById(res.locals.id)
    .populate({
        path: 'promotionId',
        populate: { path: 'establishmentId' }
      })
    .then ((user) => {
        user.promotionId.forEach((elem) => {
            if (elem._id.toString() === req.params.promotionId){
                console.log(elem)
                var result = {
                    "establishmentName" : elem.establishmentId[0].establishmentName,
                    "categoryType" : elem.establishmentId[0].category[0].categoryType,
                    "promotionType" : elem.promotionType,
                    "promotionDiscount" : elem.promotionDiscount,
                    "promotionMaturityDate" : elem.promotionMaturityDate,
                    "description" : elem.description
                }
                res.json(result)
            } 
        })
       res.json("This promotion dont exist")
    })
    .catch((err) => {
        res.json(err)
    })
}




function getAllPromotionByUser (req,res){
    userModel.findById(res.locals.id)
    .populate({
        path: 'promotionId',
        populate: { path: 'establishmentId' }
      })
    .then ((user) => {
        res.json(user.promotionId)
    })
    .catch((err) => {
        res.json(err)
    })
}

function deletePromotionById (req,res){
    promotionModel.findByIdAndDelete (req.params.promotionId)
    .then ((promotion) => {
        res.json("promotion deleted successfully")
    })
    .catch((err) => {
        res.json(err)
    })
}

function createPromotion (req,res){
    promotionModel.create(req.body)
    .then ((promotion) => {
        res.json(promotion)
    })
    .catch((err) => {
        res.json(err)
    })
}


function addPromotionToUsers (req,res) {
    userModel.findById(req.params.userId)
    .then ((user) => {
        user.promotionId.push(req.params.promotionId)
        user.save()
        res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
}


module.exports = {createPromotion, readOnePromotion, getAllPromotion, deletePromotionById, addPromotionToUsers, getAllPromotionByUser, readOnePromotionByUser}
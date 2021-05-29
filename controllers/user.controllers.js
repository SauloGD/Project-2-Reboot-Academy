const userModel = require('../models/user.model')

//                      Admin

function readOneUserByAdmin (req, res){
    userModel.findById(req.params.userId)
    .then ((user) => {
       res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
}


function deleteUserById (req,res){
    userModel.findByIdAndDelete (req.params.userId)
    .then ((user) => {
        res.json("User deleted successfully")
    })
    .catch((err) => {
        res.json(err)
    })
}


function getAllUsersByAdmin (req,res){
    userModel.find()
    .then ((user) => {
        res.json(user)
     })
     .catch((err) => {
         res.json(err)
     })
}


//                  Users


function readMyUser (req, res){
    console.log(res.locals)
    userModel.findById(res.locals.id)
    .then ((user) => {
       res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
}

function updateMyUser (req,res){
    userModel.findByIdAndUpdate(res.locals.id, req.body , {new : true}) //{ _id : res.locals.id}
    .then ((user) => {
        res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
}






module.exports = {readOneUserByAdmin , readMyUser, updateMyUser, deleteUserById, getAllUsersByAdmin}
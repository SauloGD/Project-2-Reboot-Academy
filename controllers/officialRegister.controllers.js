const officialRegisterModel = require('../models/officialRegister.model')


function readOneOfficialRegister (req, res){
    officialRegisterModel.findById(req.params.officialRegisterId)
    .then ((officialRegister) => {
       res.json(officialRegister)
    })
    .catch((err) => {
        res.json(err)
    })
}




function getAllOfficialRegister (req,res){
    officialRegisterModel.find()
    .then ((officialRegister) => {
        res.json(officialRegister)
    })
    .catch((err) => {
        res.json(err)
    })
}



function deleteOfficialRegisterById (req,res){
    officialRegisterModel.findByIdAndDelete (req.params.officialRegisterId)
    .then ((officialRegister) => {
        res.json("Official Register deleted successfully")
    })
    .catch((err) => {
        res.json(err)
    })
}

function createOfficialRegister (req,res){
    officialRegisterModel.create(req.body)
    .then ((officialRegister) => {
        res.json(officialRegister)
    })
    .catch((err) => {
        res.json(err)
    })
}

function updateOfficialRegisterById (req,res){
    officialRegisterModel.findByIdAndUpdate(req.params.officialRegisterId, req.body , {new : true}) //{ _id : res.locals.id}
    .then ((officialRegister) => {
        res.json(officialRegister)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports = {readOneOfficialRegister, getAllOfficialRegister, deleteOfficialRegisterById, createOfficialRegister, updateOfficialRegisterById}
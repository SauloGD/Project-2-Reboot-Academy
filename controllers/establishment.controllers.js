const establishmentModel = require('../models/establishment.model')
const {titleCase, findSites} = require('../Try')

//              Users

function readOneEstablishment (req, res){
    establishmentModel.findById(req.params.establishmentId)
    .then ((establishment) => {
       res.json(establishment)
    })
    .catch((err) => {
        res.json(err)
    })
}




function getAllestablishment (req,res){
    establishmentModel.find()
    .then ((establishment) => {
        res.json(establishment)
    })
    .catch((err) => {
        res.json(err)
    })
}


//              Admin

function deleteEstablishmentById (req,res){
    establishmentModel.findByIdAndDelete (req.params.establishmentId)
    .then ((establishment) => {
        res.json("Establishment deleted successfully")
    })
    .catch((err) => {
        res.json(err)
    })
}

function createEstablishment (req,res){
    establishmentModel.create(req.body)
    .then ((establishment) => {
        res.json(establishment)
    })
    .catch((err) => {
        res.json(err)
    })
}


function updateEstablishmentById (req,res){
    establishmentModel.findByIdAndUpdate(req.params.establishmentId, req.body , {new : true}) //{ _id : res.locals.id}
    .then ((establishment) => {
        res.json(establishment)
    })
    .catch((err) => {
        res.json(err)
    })
}

//                  Query

function filterEstablishmentByLocation (req,res){
    var minusculas = req.query.location.toLowerCase()
    var fooArray = findSites(minusculas)
    establishmentModel.find({location : fooArray})
    .then ((establishment) => {
        res.json(establishment)
    })
    .catch((err) => {
        res.json(err)
    })
}


module.exports = {createEstablishment, readOneEstablishment, getAllestablishment, deleteEstablishmentById, updateEstablishmentById, filterEstablishmentByLocation}
const establishmentModel = require('../models/establishment.model')
const { titleCase, findSites } = require('../Try')

//              Users

function readOneEstablishment(req, res) {
    establishmentModel.findById(req.params.establishmentId)
        .then((establishment) => {
            res.json(establishment)
        })
        .catch((err) => {
            res.json(err)
        })
}




function getAllestablishment(req, res) {
    establishmentModel.find()
        .then((establishment) => {
            res.json(establishment)
        })
        .catch((err) => {
            res.json(err)
        })
}


//              Admin

function deleteEstablishmentById(req, res) {
    establishmentModel.findByIdAndDelete(req.params.establishmentId)
        .then((establishment) => {
            res.json("Establishment deleted successfully")
        })
        .catch((err) => {
            res.json(err)
        })
}

function createEstablishment(req, res) {
    establishmentModel.create(req.body)
        .then((establishment) => {
            res.json(establishment)
        })
        .catch((err) => {
            res.json(err)
        })
}


function updateEstablishmentById(req, res) {
    establishmentModel.findByIdAndUpdate(req.params.establishmentId, req.body, { new: true }) //{ _id : res.locals.id}
        .then((establishment) => {
            res.json(establishment)
        })
        .catch((err) => {
            res.json(err)
        })
}

//                  Query


function filterEstablishmentByLocation(req, res) {

    let query = [];
    if (req.query.location) query.push({ location: {$regex : req.query.location, $options : "i"}})
    if (req.query.categoryType) query.push({ "category.categoryType" : {$regex : req.query.categoryType, $options : "i"}})
    if (req.query.tags) query.push({ "category.tags" : { $in: req.query.tags }})
    
    establishmentModel.find({ $and: query})
        .then((establishment) => {
            res.json(establishment)
        })
}
module.exports = { createEstablishment, readOneEstablishment, getAllestablishment, deleteEstablishmentById, updateEstablishmentById, filterEstablishmentByLocation }
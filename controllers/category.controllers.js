const {categoryModel, categorySchema} = require('../models/category.model')
const establishmentModel = require('../models/establishment.model')

function updateCategoryById (req,res){
    establishmentModel.findById(req.params.establishmentId)
    .then ((establishment) => {
        establishment.category.tags = req.body.tags ? req.body.tags : establishment.category.tags
        .save()
        res.json(establishment.category)
    })
    .catch((err) => {
        res.json(err)
    })
}


function readOneCategory (req, res){
    establishmentModel.findById(req.params.establishmentId)
    .then ((establishment) => {
       res.json(establishment.category)
    })
    .catch((err) => {
        res.json(err)
    })
}



module.exports = {updateCategoryById, readOneCategory}
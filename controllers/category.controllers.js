const {categoryModel, categorySchema} = require('../models/category.model')
const establishmentModel = require('../models/establishment.model')

function updateCategoryById (req,res){
    establishmentModel.findById(req.params.establishmentId)
    .then ((establishment) => {
        establishment.category.tags = req.body.tags ? req.body.tags : establishment.category.tags
        establishment.category.categoryType = req.body.categoryType ? req.body.categoryType : establishment.category.categoryType
        establishment.category.description = req.body.description ? req.body.description : establishment.category.description
        establishment.save()
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
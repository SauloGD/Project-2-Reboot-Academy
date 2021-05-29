const {categoryModel, categorySchema} = require('../models/category.model')
const establishmentModel = require('../models/establishment.model')

function updateCategoryById (req,res){
    categoryModel.findByIdAndUpdate(req.params.categoryId, req.body , {new : true})
    .then ((category) => {
        res.json(category)
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
const mongoose = require('mongoose')
const {categoryModel, categorySchema} = require('./category.model')

const establishmentSchema = new mongoose.Schema({
    establishmentName : {
        type : String,
        require : [true, 'Establishment Name is required']
    },
    category : [categorySchema],
    fiscalId : {
        type : String,
        require : [true, 'Fiscal id is required']
    },
    location : {
        type : String,
        require : [true, 'Location is required']
    },
    capacity : {
        type : Number,
        require : [true, 'Capacity is required']
    },
    phoneNumber : {
        type : Number,
        require : [true, 'Phone number is required']
    },
    contactPerson : {
        type : String,
        require : [true, 'Contact person is required']
    },
    schedule : {
        type : String,
        require : [true, 'Schedule is required']
    }
})

const establishmentModel = mongoose.model('establishment', establishmentSchema)
module.exports = establishmentModel
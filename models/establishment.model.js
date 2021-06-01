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
        require : [true, 'Location is required'],
        enum : ["Agaete","Agüimes","Artenara","Arucas","Firgas","Gáldar","Ingenio","La Aldea de San Nicolás","Las Palmas de Gran Canaria","Mogán","Moya","San Bartolomé de Tirajana","Santa Brígida","Santa Lucía de Tirajana","Santa María de Guía de Gran Canaria","Tejeda","Telde","Teror","Valleseco","Valsequillo de Gran Canaria", "Vega de San Mateo"]
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
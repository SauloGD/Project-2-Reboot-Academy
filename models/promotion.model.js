const mongoose = require('mongoose')

const promotionSchema = new mongoose.Schema({
    establishmentId : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'establishment',
        require: [true, 'At least one establishment is require']
    }],
    promotionType : {
        type : String,
        require : [true, 'Promotion type is required']
    },
    promotionDiscount : {
        type : String,
        require : [true, 'Promotion discount is required']
    },
    promotionMaturityDate : {
        type : Date,
        require : [true, 'Promotion maturity date is required']
    },
    description : {
        type : String,
        require : [true, 'Description is required']
    }
})


const promotionModel = mongoose.model('promotion', promotionSchema)
module.exports = promotionModel
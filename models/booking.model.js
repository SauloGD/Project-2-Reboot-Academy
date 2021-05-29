const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    establishmentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'establishment'
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    date : {
        type : Date,
        require: [true , 'Date is required']
    },
    email : {
        type : String,
    },
    covidTest : {
        type : Boolean,
        require: [true , 'Covid test is required']
    },
    checkInComplete : {
        type : Boolean,
        require: [true , 'Check in status is required']
    }
})

const bookingModel = mongoose.model('booking', bookingSchema)
module.exports = bookingModel
const mongoose = require('mongoose')


const oficialRegisterSchema = new mongoose.Schema({
    booking : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'booking'
    },
    dataSent : {
        type : String,
        require : [true, 'Data is required']
    },
    personalNumber : {
        type : Number,
        require : [true, 'Personal Number is required']
    },
    date : {
        type : Date,
        require : [true, 'Date is required']
    },
    policeOffice : {
        type : String,
        require : [true, 'Police office is required']
    },
    establishmentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'establishment'
    }
})


const oficialRegisterModel = mongoose.model('oficialRegister', oficialRegisterSchema)
module.exports = oficialRegisterModel
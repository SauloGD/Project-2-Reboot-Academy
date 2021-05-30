const mongoose = require('mongoose')


const officialRegisterSchema = new mongoose.Schema({
    bookingId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'booking'
    },
    dataSent : {
        type : Date,
        require : [true, 'Data is required']
    },
    peopleNumber : {
        type : Number,
        require : [true, 'Personal Number is required']
    },
    policeOffice : {
        type : String,
        require : [true, 'Police office is required']
    }
})


const officialRegisterModel = mongoose.model('officialRegister', officialRegisterSchema)
module.exports = officialRegisterModel
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true, 'User Name is required']
    },
    userSurname : {
        type : String,
        required : [true, 'User Surname is required']
    },
    userDNI : {
        type : String,
        required : [true, 'DNI is required']
    },
    userDNIExpirationDate :{
        type : Date,
        required : [true, 'DNI Expiration Date is required']
    },
    userEmail : {
        type : String,
        require : [true, 'Email is required'],
        validate: {
            validator(value) {
              return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/.test(value);
            }
        },
        unique: [true, 'Email is registered']
    },
    phoneNumber : {
        type : Number,
        require : [true, 'Phone number is required']
    },
    covidPassport : {
        type: Boolean,
    },
    nationality : {
        type : String,
        require : [true, 'Nationality is required']
    },
    dateOfBirth :{
        type : Date,
        require : [true, 'Date Of Birth is required']
    },
    adress : {
        type : String,
        require : [true, 'Adress is required']
    },
    gender : {
        type : String,
        require : [true, 'Gender is required']
    },
    photo : {
        type : String,
        default : 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/10/jackie-chan-2113345.jpg'
    },
    admin : {
        type : Boolean,
        default : false
    },
    userPwd : {
        type : 'String',
        require : [true, 'Password is required']
    },
    promotionId : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'promotion'
    }]
})


const userModel = mongoose.model('user', userSchema)
module.exports = userModel

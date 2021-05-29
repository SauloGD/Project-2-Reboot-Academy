const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function signup(req, res) {
  /*
    req.body = {
      name, 
      pwd, 
      email
    }
  */

    const hashed_pwd = bcrypt.hashSync(req.body.userPwd, 10)

    const hashed_body = {
      userName: req.body.userName,
      userSurname: req.body.userSurname,
      userDNI: req.body.userDNI,
      userDNIExpirationDate: req.body.userDNIExpirationDate,
      userEmail : req.body.userEmail,
      phoneNumber: req.body.phoneNumber,
      covidPassport: req.body.covidPassport,
      nationality: req.body.nationality,
      dateOfBirth: req.body.dateOfBirth,
      adress: req.body.adress,
      gender: req.body.gender,
      photo: req.body.photo,
      admin: req.body.admin,
      userPwd: hashed_pwd
    }

    userModel.create(hashed_body)
      .then((user) => {

        const insideToken = {
          userName: user.userName,
          id: user._id,
          admin: user.admin,
          userEmail: user.userEmail
        }

        const token = jwt.sign(
          insideToken,
          process.env.SECRET
        )

        const resUser = {
          id: user._id,
          userName: user.userName,
          userEmail: user.userEmail,
          admin: user.admin,
          token: token
        }

        res.json(resUser)
      })
      .catch((err) => {
        res.json(err)
      })
}

function login(req, res) {
  /*
    req.body = {
      email,
      pwd
    }
  */

  userModel.findOne({ userEmail: req.body.userEmail })
    .then((user) => {
      if (!user) res.json('Wrong email')

      bcrypt.compare(
        req.body.userPwd, 
        user.userPwd, 
        (err, result) => {
          if (err) res.json('Wrong password')
          
          const insideToken = {
            userName: user.userName,
            userEmail: user.userEmail,
            admin: user.admin,
            id: user._id
          }
          const token = jwt.sign(
            insideToken,
            process.env.SECRET,
          )

          resUser = {
            userName: user.userName,
            userEmail: user.userEmail,
            admin: user.admin,
            id: user._id,
            token: token
          }
          
          res.json(resUser)
        })

    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  signup,
  login
}
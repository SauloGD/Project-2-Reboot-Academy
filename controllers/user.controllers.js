const userModel = require('../models/user.model')

//                      Admin

function readOneUserByAdmin (req, res){
    userModel.findById(req.params.id)
    .then ((user) => {
       res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
}



//                  Users


function readMyUser (req, res){
    console.log(res.locals)
    userModel.findById(res.locals.id)
    .then ((user) => {
       res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
}


module.exports = {readOneUserByAdmin , readMyUser}
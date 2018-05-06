'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Auth')
const User = mongoose.model('ProfileAndUsernamePassword')


exports.check = function(req, res){
    var query = { sort: { firstName: 1 } }
    User.find({}, null, query, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}


exports.check2 = function(req, res){
    let query = { Username: req.body.Username }
    console.log(query)
    User.findOne(query, (err ,user) => {
        if(err) throw err
        console.log(user)
        console.log(req.body)
        console.log(req.body.Username)
        console.log(req.body.Password)
        console.log(User.Password)
        if(User != null){
        if (req.body.Password == User.Password) {
            res.json("OK!!")
            console.log(req.body.Password)
            console.log(User.Password)
        }else{
            res.json("Cant Find")
        }
    }
        
    })
}

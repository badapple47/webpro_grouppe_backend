'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Auth')
const authGrouppe = mongoose.model('auths')


exports.check = function(req, res){
    console.log(req.body.username)
    // var query = { sort: { Id: 'joeyinwza' } }
    let query = { username: 'joeyinwza' }
    console.log(query)
    authGrouppe.findOne(query, (err ,user) => {
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}


exports.check2 = function(req, res){
    // console.log(req.body.username)
    // var query = { sort: { Id: 'joeyinwza' } }
    let query = { username: req.body.username }
    console.log(query)
    User.findOne(query, (err ,user) => {
        if(err) throw err
        console.log(user)
        if(user != null){
        if (req.body.password == user.password) {
            res.json("Okay!")
        }else{
            res.json("Cant Find")
        }
    }
        
    })
}

// exports.createAUser = function(req, res){
//     // console.log(req.body)
//     var newUser = new User(req.body)
//     newUser.save(function(err, user){
//         if(err) throw err
//         res.json(user)
//     })
// }


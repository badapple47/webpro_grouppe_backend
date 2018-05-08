'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Auth')
const User = mongoose.model('users')


exports.check = function(req, res){
    console.log(User)
    var query = { sort: { firstName: 1 } }
    User.find({}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}


exports.check2 = function(req, res){
    let query = { username: req.body.username }
    // console.log(query)
    User.findOne(query, (err ,user) => {
        if(err) throw err
        // console.log(user)
        // console.log(req.body)
        console.log(req.body.username)
        console.log(req.body.password)
        console.log(user.password)
        if(User != null){
        if (req.body.password == user.password) {
            res.json("success")
            console.log(req.body.password)
            console.log(user.password)
        }else{
            res.json("fail")
        }
    }
        
    })
}

exports.createAUser = function(req, res){
    // console.log(req.body)
    User.insertMany(req.body, function(err, res) {
      if (err) throw err
      console.log("Insert complete!!")
      
    })
    res.json("insert complete!!")
}


exports.update = function(req, res){
  console.log(req.body)
  console.log(req.params.userID)
  var newUser = {}
  newUser = req.body
  // console.log(newUser)
  User.findByIdAndUpdate(req.params.userID, newUser, {new: true}, function(err, user){
      if(err) throw err
      // console.log(user)
      res.json(user)
  })
}

exports.showUser = function(req, res){
  console.log(req.params.userID)
  // console.log(newUser)
  User.findById(req.params.userID, function(err, user){
      if(err) throw err
      // console.log(user)
      res.json(user)
  })
}

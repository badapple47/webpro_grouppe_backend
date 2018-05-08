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
    let query = { Username: req.body.Username }
    // console.log(query)
    User.findOne(query, (err ,user) => {
        if(err) throw err
        // console.log(user)
        // console.log(req.body)
        console.log(req.body.Username)
        console.log(req.body.Password)
        console.log(user.Password)
        if(User != null){
        if (req.body.Password == user.Password) {
            res.json("success")
            console.log(req.body.Password)
            console.log(user.Password)
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

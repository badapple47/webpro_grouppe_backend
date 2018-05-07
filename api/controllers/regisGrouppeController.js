'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Auth')
const authGrouppe = mongoose.model('users')



exports.createAUser = function(req, res){
    // console.log(req.body)
    authGrouppe.insertMany(req.body, function(err, res) {
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
  authGrouppe.findByIdAndUpdate(req.params.userID, newUser, {new: true}, function(err, user){
      if(err) throw err
      // console.log(user)
      res.json(user)
  })
}

exports.showUser = function(req, res){
  console.log(req.params.userID)
  // console.log(newUser)
  authGrouppe.findById(req.params.userID, function(err, user){
      if(err) throw err
      // console.log(user)
      res.json(user)
  })
}

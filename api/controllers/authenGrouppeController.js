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
        // for(i = 0; i<= user.length; i++){
        //     if(user.NameTH!="")
        //         res.json(user[1])
        // }
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
        // console.log(user.password)
        if(user != null){
        if (req.body.password == user.password) {
            var obj = new Object
            obj = { 
                    "note":"success",
                    "userID": user._id
                }
            res.json(obj)
            console.log(req.body.password)
            console.log(user.password)
        }else{
            res.json("fail")
        }
    }else{
        res.json("not found")
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

'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Auth')
const Eve = mongoose.model('events')
const User = mongoose.model('users')

exports.check = function(req, res){
    console.log(User)
    var query = { sort: { firstName: 1 } }
    Eve.find({}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}

exports.updateMemberEvent = function(req,res){
    console.log(req.body.eventID)
    console.log(req.body.userID)

    var memberInEventArray = []
    var eventInMemberArray = []
  // console.log(newUser)
    Eve.findById(req.body.eventID, function(err, user){
        if(err) throw err
        console.log(user)
        memberInEventArray = user.userID
        console.log(memberInEventArray)
        memberInEventArray.push(req.body.userID)
        var newAdd = { "userID" : memberInEventArray }
        Eve.findByIdAndUpdate(req.body.eventID, newAdd, {new: true}, function(err, user){
            if(err) throw err
            // console.log(user)
            res.json(user)
        })
        // console.log(user)
        res.json(user)

  })
}
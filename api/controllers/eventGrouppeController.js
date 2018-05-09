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
    var newAdd
    Eve.findById(req.body.eventID, function(err, eve){
        if(err) throw err
        memberInEventArray = eve.userId
        memberInEventArray.push(req.body.userID)
        newAdd = { "userId" : memberInEventArray }
        Eve.findByIdAndUpdate(req.body.eventID, newAdd, {new: true}, function(err, user){
    if(err) throw err
    res.json(user)
        })
  })

  

}

///////////////////////////////

exports.updateEventInMember = function(req,res){
    console.log(req.body.eventID)
    console.log(req.body.userID)

    var eventInMemberArray = []
    var newAdd
    User.findById(req.body.userID, function(err, user){
        if(err) throw err
        eventInMemberArray = user.eventId
        eventInMemberArray.push(req.body.eventID)
        newAdd = { "eventId" : eventInMemberArray }
        User.findByIdAndUpdate(req.body.userID, newAdd, {new: true}, function(err, user){
            if(err) throw err
                res.json(user)
        })
  })
}

exports.checkEventInMember = function(req,res){
    console.log(req.body.eventID)
    console.log(req.body.userID)
    var i
    var check = 123456
    User.findById(req.body.userID, function(err, user){
        if(err) throw err
        for(i=0; i<= user.eventId.length; i++){

            if(user.eventId[i] == req.body.eventID)
                check = i
        
        }
        if(check!=123456)
            res.json("this member already join this event .")
        else
            res.json("this member didn't join to this event .")
        
    })
}
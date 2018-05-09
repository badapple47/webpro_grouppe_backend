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
    var newAdd
  // console.log(newUser)
    Eve.findById(req.body.eventID, function(err, eve){
        if(err) throw err
        console.log("req.body.userID : "+ req.body.userID.toString())
        console.log("eve.userId : "+ eve.userId)
        memberInEventArray = eve.userId
        console.log("this is eve.userId : "+ eve.userId)
        // console.log ("this is member before push : "+memberInEventArray)
        // if(eve.userId == [])
        //     memberInEventArray = [req.body.userID.toString()]
        // // console.log(memberInEventArray)
        // else
        memberInEventArray.push(req.body.userID)
        console.log("this is mem after push : "+memberInEventArray)
        // memberInEventArray.push(req.body.userID)
        newAdd = { "userId" : memberInEventArray }

        
        // console.log(user)
        // res.json(user)

  })

  Eve.findByIdAndUpdate(req.body.eventID, newAdd, {new: true}, function(err, user){
    if(err) throw err
    console.log("this is newAdd : "+ newAdd)
    console.log("this is memberInEventArray : "+ memberInEventArray)
    res.json(user)
})

}
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
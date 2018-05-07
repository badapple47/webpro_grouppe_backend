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


// exports.createAUser = function(req, res){
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
// var dbo = db.db("grouppe")
//     //Insert Many Items
//    var obj = req.body
//   dbo.collection("users").insertMany(obj, function(err, res) {
//     if (err) throw err
//     console.log("Inserted "+res.insertedCount+" items")
//     db.close()
//   })
// })
// }

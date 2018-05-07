//----- index.js ------//
//run mongodb: mongod --dbpath /data
//npm install mongodb --save

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("grouppe")
    //Insert Many Items
   var obj = [ 
            {
                Username : "Onewdivide",
                Password : "Grouppe",
                ImageURL : "https://www.facebook.com/photo.php?fbid=1166602680052157&set=a.138290892883346.18622.100001073085688&type=3&permPage=1",
                NameTH : "ไอศูรย์ ใบสะอาด",
                NameEng : "Isul Bisaard",
                StudentID : "5713378",
                Email : "Onewdivide@hotmail.co.th",
                Facebook : "https://www.facebook.com/onewdivide",
                Phone : "0982617716",
                Work : "Computer Engineering",
                Skill : "Java, Android"
            }
            ]
  dbo.collection("users").insertMany(obj, function(err, res) {
    if (err) throw err
    console.log("Inserted "+res.insertedCount+" items")
    db.close()
  })
})
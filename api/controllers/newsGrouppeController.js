'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Auth')
const News = mongoose.model('news')

exports.check = function(req, res){
    // console.log(News)
    var query = { sort: { firstName: 1 } }
    News.find({}, function(err, news){
        if(err) throw err
        console.log(news)
        // for(i = 0; i<= user.length; i++){
        //     if(user.NameTH!="")
        //         res.json(user[1])
        // }
        res.json(news)
    })
}
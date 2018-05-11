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

exports.showNews = function(req,res){
    console.log(req.params.newsID)
    // console.log(newUser)
    News.findById(req.params.newsID, function(err, news){
        if(err) throw err
        // console.log(user)
        res.json(news)
    })
}

exports.updateNewsView = function(req,res){
    var tempview,newAdd
    console.log("updateEventView")
    News.findById(req.params.newsID, function(err, news){
        if(err) throw err
        console.log(news.view)
        tempview = news.view+1
        newAdd = {
            "view" : tempview
        }
        News.findByIdAndUpdate(req.params.newsID, newAdd, {new: true}, function(err, eve){
            if(err) throw err
        res.json(eve)
        })

    })
}
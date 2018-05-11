'use strict'
module.exports = function(app){
   
    var news = require('../controllers/newsGrouppeController')

    app.route('/news')
        .get(news.check)

    app.route('/showNews/:newsID')
        .get(news.showNews)

    app.route('/updateNewsView/:newsID')
        .get(news.updateNewsView)
}
'use strict'
module.exports = function(app){
   
    var news = require('../controllers/newsGrouppeController')

    app.route('/news')
        .get(news.check)

}
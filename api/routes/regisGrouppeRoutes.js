'use strict'
module.exports = function(app){
   
    var Regis = require('../controllers/regisGrouppeController')

    app.route('/regisGrouppe')
        .post(Regis.createAUser)

}
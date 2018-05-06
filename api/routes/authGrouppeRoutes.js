'use strict'
module.exports = function(app){
   
    var Auth = require('../controllers/authenGrouppeController')


    app.route('/authenGrouppe')
        .get(Auth.check)
        .post(Auth.check2)

}
'use strict'
module.exports = function(app){
   
    var Auth = require('../controllers/authenGrouppeController')


    app.route('/authenGrouppe')
        .post(Auth.check2)

    app.route('/user')
        .get(Auth.check)

}
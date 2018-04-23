'use strict'
module.exports = function(app){
   
    var Auth = require('../controllers/authenController')


    app.route('/authen')
        .get(Auth.check)
        .post(Auth.check2)

}
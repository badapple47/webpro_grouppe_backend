'use strict'
module.exports = function(app){
   
    var Auth = require('../controllers/authenGrouppeController')


    app.route('/authen')
        .post(Auth.check2)

    app.route('/alumnia')
        .get(Auth.check)
        
    app.route('/register')
        .post(Auth.createAUser)


    app.route('/updatealumnia/:userID')
        .post(Auth.update)

    app.route('/alumnia/:userID')
        .get(Auth.showUser)

}
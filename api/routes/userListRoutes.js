'use strict'
module.exports = function(app){
    // var User = require('../controllers/userListController')


    // app.route('/users')
    //     .get(User.listAllUsers)
    //     .post(User.createAUser)

    // app.route('/users/:userId')
    //     .get(User.readAUser)
    //     .delete(User.deleteAUser)
    //     .post(User.updateAUser)
    var Auth = require('../controllers/authenGrouppeController')


    app.route('/users')
        .get(Auth.check)
        .post(Auth.check2)


}
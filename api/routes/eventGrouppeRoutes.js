'use strict'
module.exports = function(app){
   
    var eve = require('../controllers/eventGrouppeController')


    app.route('/event')
        .get(eve.check)
    app.route('/updateMemberEvent')
        .post(eve.updateMemberEvent)


}
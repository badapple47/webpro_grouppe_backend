'use strict'
module.exports = function(app){
   
    var eve = require('../controllers/eventGrouppeController')


    app.route('/event')
        .get(eve.check)
        
    app.route('/updateMemberInEvent')
        .post(eve.updateMemberEvent)
        
    app.route('/updateEventInMember')
        .post(eve.updateEventInMember)


}
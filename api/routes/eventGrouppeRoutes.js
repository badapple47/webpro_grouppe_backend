'use strict'
module.exports = function(app){
   
    var eve = require('../controllers/eventGrouppeController')


    app.route('/event')
        .get(eve.check)

    app.route('/showEvent/:eventID')
        .get(eve.showEvent)

    app.route('/updateMemberInEvent')
        .post(eve.updateMemberEvent)
        
    app.route('/updateEventInMember')
        .post(eve.updateEventInMember)

    app.route('/checkEventInMember')
        .post(eve.checkEventInMember)


}
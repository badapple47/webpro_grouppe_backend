'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    news: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    shortDescription : {
        type: String
    }

})

// module.exports = mongoose.model('Auth', UserSchema)
module.exports = mongoose.model('events', UserSchema)
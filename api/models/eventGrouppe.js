'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    event: {
        type: String
    },
    day: {
        type: String
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    shortDescription:{

        type: String

    },
    location:{
        type: String
    },
    userId : {
        type: Array
    },
    


})

// module.exports = mongoose.model('Auth', UserSchema)
module.exports = mongoose.model('events', UserSchema)


'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    event: {
        type: String
    },
    dayStart: {
        type: String
    },
    monthStart: {
        type: String
    },
    yearStart: {
        type: String
    },
    dayEnd: {
        type: String
    },
    monthEnd: {
        type: String
    },
    yearEnd: {
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
    view: {
        type: Number
    }

})

// module.exports = mongoose.model('Auth', UserSchema)
module.exports = mongoose.model('events', UserSchema)


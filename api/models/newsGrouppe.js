'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    news: {
        type: String
    },
    imageURL: {
        type: String
    },
    description: {
        type: String
    },
    day: {
        type: Number
    },
    month: {
        type : String
    },
    year: {
        type: Number
    },
    view:{
        type: Number
    },
    location:{
        type : String
    }

})
module.exports = mongoose.model('news', UserSchema)

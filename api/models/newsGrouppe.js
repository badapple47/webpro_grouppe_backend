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
        type : Number
    },
    year: {
        type: Number
    },
    view:{
        type: Number
    }

})
module.exports = mongoose.model('news', UserSchema)

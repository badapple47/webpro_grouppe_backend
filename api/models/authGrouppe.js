'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    imageURL: {
        type: String
    },
    nameTH: {
        type: String
    },
    nameEng: {
        type: String
    },
    studentID: {
        type: String
    },
    email: {
        type: String
    },
    facebook: {
        type: String
    },
    phone: {
        type: String
    },
    work: {
        type: String
    },
    skill: {
        type: String
    },
    mobileNo: {
        type: String
    },
    website: {
        type: String
    },
    nationalID: {
        type: String
    },
    department: {
        type: String
    },



})

// module.exports = mongoose.model('Auth', UserSchema)
module.exports = mongoose.model('users', UserSchema)


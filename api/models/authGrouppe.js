'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    Username: {
        type: String
    },
    Password: {
        type: String
    },
    ImageURL: {
        type: String
    },
    NameTH: {
        type: String
    },
    NameEng: {
        type: String
    },
    StudentID: {
        type: String
    },
    Email: {
        type: String
    },
    Facebook: {
        type: String
    },
    Phone: {
        type: String
    },
    Work: {
        type: String
    },
    Skill: {
        type: String
    }

})

// module.exports = mongoose.model('Auth', UserSchema)
module.exports = mongoose.model('ProfileAndUsernamePassword', UserSchema)


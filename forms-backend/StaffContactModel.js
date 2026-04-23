// const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')

const staffContactSchema = new mongoose.Schema({
    lastName: {
        type: String,
        require: true
    },

    firstName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    message: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model('ContactStaffMember', staffContactSchema)


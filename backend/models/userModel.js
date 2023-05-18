const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add a password']
    },
    wallet: {
        type: Number,
        default: 0
    },
    stars: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)
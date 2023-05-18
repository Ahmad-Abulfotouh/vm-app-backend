const mongoose = require('mongoose')

const machineSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add an order'],
    },
    number: {
        type: Number,
        required: [true, 'please add a number'],
    },
    address: {
        type: String,
    },
    coordinates: {
        type: Array,
        required: [true, 'please add an coordinates'],
    },
    products: [{
            /* id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },*/
            id: String,
            amount: Number,
            offer: Number,
        } ]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Machine', machineSchema)
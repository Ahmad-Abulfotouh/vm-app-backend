const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            required: [true, 'please add an order'],
            ref: 'Product',
        }
    ]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Order', orderSchema)
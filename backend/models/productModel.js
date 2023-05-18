const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name'],
        unique: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    discription: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'please add a price'],
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', productSchema)
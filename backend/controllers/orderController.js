const asyncHandler = require('express-async-handler')

const Order = require('../models/orderModel')

// @description     Get Orders
// @route           GET /api/orders
// @access          Public
const getOrders = asyncHandler( async (req, res) => {
    const orders = await Order.find({ user: req.user.id })
    res.status(200).json(orders)
})

// @description     Set Orders
// @route           SET /api/orders
// @access          Public
const setOrder = asyncHandler( async (req, res) => {
    // check for the text
    if(!req.body.text) {
        res.status(400)
        throw new Error('plase add a text field')
    }

    const order = await Order.create({
        text: req.body.text
    })

    res.status(200).json(product)
})

module.exports = {
    getOrders,
    setOrder,
}
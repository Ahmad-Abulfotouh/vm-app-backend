const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')

// @description     Get products
// @route           GET /api/products
// @access          Public
const getProducts = asyncHandler( async (req, res) => {
    const products = await Product.find({ user: req.user.id })
    res.status(200).json(products)
})

// @description     set products
// @route           SET /api/products
// @access          Public
const setProduct = asyncHandler( async (req, res) => {
    // check for the name and price
    if(!req.body.name || !req.body.name) {
        res.status(400)
        throw new Error('plase add name and price fields')
    }

    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        discription: req.body.discription,
    })

    res.status(200).json(product)
})

// @description     update product
// @route           PUT /api/products/:id
// @access          Public
const updateProduct = asyncHandler( async (req, res) => {

    // original product
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400)
        throw new Error('product not found')
    }

    // updated product
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedProduct)
})

// @description     delete product
// @route           DELETE /api/products/:id
// @access          Public
const deleteProduct = asyncHandler( async (req, res) => {

    // original product
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(400)
        throw new Error('product not found')
    }

    // delete
    await Product.remove()
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
}
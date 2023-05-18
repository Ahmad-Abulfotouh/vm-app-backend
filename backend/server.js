const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const { connectDB } = require('./config/db')
const port = process.env.PORT || 5000


connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/machines', require('./routes/machineRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log('server start on port', port,))

/* 
    user    : id, name, email, password
    product : id, name, image, discription, price
    machine : id, name, location, products[ {product.id, offer} ], amount
    order   : id, userId, products[ {product.id, price(product.price - product.price * offer)} ]
*/
const express = require('express')
const router = express.Router()
const { getOrders, setOrder } = require('../controllers/orderController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getOrders)
router.post('/', protect, setOrder)

module.exports = router
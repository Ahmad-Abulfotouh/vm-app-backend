const express = require('express')
const router = express.Router()
const { getMachines, setMachine, updateMachine, deleteMachine } = require('../controllers/machineController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getMachines)
router.post('/', protect, setMachine)
router.put('/:id', protect, updateMachine)
router.delete('/:id', protect, deleteMachine)

module.exports = router
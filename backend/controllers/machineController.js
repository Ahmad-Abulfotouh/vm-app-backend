const asyncHandler = require('express-async-handler')

const Machine = require('../models/machineModel')

// @description     Get Machines
// @route           GET /api/machines
// @access          Public
const getMachines = asyncHandler( async (req, res) => {
    const machines = await Machine.find({ id: req.body.id })
    res.status(200).json(machines)
})

// @description     Set Machine
// @route           SET /api/machines
// @access          Public
const setMachine = asyncHandler( async (req, res) => {
    // check for the name, address, coordinates and products
    if(!req.body.name || !req.body.coordinates) {
        res.status(400)
        throw new Error('plase add all fields')
    }

    const machine = await Machine.create({
        name: req.body.name,
        address: req.body.address,
        coordinates: req.body.coordinates,
        products: req.body.products,
    })

    res.status(200).json(machine)
})

// @description     Update Machines
// @route           PUT /api/machines/:id
// @access          Public
const updateMachine = asyncHandler( async (req, res) => {

    // original machine
    const machine = await Machine.findById(req.params.id)
    if(!machine) {
        res.status(400)
        throw new Error('Machine not found')
    }

    // updated machine
    const updatedMachine = await Machine.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedMachine)
})

// @description     Delete Machines
// @route           DELETE /api/machines/:id
// @access          Public
const deleteMachine = asyncHandler( async (req, res) => {

    // original machine
    const machine = await Machine.findById(req.params.id)
    if(!machine) {
        res.status(400)
        throw new Error('Machine not found')
    }

    // delete
    await Machine.remove()
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getMachines,
    setMachine,
    updateMachine,
    deleteMachine
}
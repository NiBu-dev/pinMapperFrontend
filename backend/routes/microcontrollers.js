const express = require('express');
const router = express.Router();
const Microcontroller = require('../models/microcontroller');


// Get all microcontrollers
router.get('/', async (req, res) => {
    try {
        const microcontroller = await Microcontroller.find();
        res.json(microcontroller[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


module.exports = router;
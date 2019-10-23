const express = require('express');
const router = express.Router();

// Get all microcontrollers
router.get('/', (req, res) => {
    res.send('Test')
})
module.exports = router;
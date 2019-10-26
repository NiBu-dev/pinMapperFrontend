const mongoose = require('mongoose')
const subscriberSchema = new mongoose.Schema({
    test: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Microcontroller', subscriberSchema);
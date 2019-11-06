const express = require('express');
const router = express.Router();
const transporter = require('../controllers/transporter');
const mailConfig = require('../mailConfig')

router.post('/send', (req, res, next) => {
    var name = req.body.data.name
    var email = req.body.data.email
    var message = req.body.data.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
    console.log(content)

    var mail = {
        from: name,
        to: mailConfig.USER,  //Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err)
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
});

module.exports = router;
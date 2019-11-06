require('dotenv').config();

const express = require('express');
var path = require('path');
const app = express();
var cors = require('cors');

app.use(cors({ origin: true, credentials: true }));

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Type, X-Auth-Token"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const microcontrollersRouter = require('./routes/microcontrollers')
const mailerRouter = require('./routes/mailer');
app.use('/microcontrollers', microcontrollersRouter)
app.use('/mailer', mailerRouter)


app.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('server started'));

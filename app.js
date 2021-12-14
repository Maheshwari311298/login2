const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { LoginGuest } = require('../action/action');

app.post('/login',  (req, res) => {
    var login_data = req.body;
    LoginGuest(login_data)
        .then((response) => {
            console.log('Login_response:', response);
            res.status(200).json(response);
        }).catch((error) => {
            console.log('Login error:', error);
            res.status(400).json(error);
        });
})




module.exports = app;
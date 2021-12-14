const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(
    bodyParser.json({
      limit: "50mb",
      extended: true,
    })
    
);

app.use('/',require('./app/app'));
// app.use('./register.html',require())

module.exports = app;
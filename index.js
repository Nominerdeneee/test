var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js')

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});

// get user information
app.get('/account/:email/info', function (req, res) {
    dal.findOne(req.params.email).
    then((user) =>{
        console.log(user);
        res.send(user);
    })
});

// deposit
app.get('/account/:email/deposit/:amount', function (req, res) {
    dal.depositUpdate(req.params.email, parseInt(req.params.amount)).
    then((user) => {
        console.log(user)
        res.send(user)
    });
});

// withdraw
app.get('/account/:email/withdraw/:amount', function (req, res) {
    dal.withdrawUpdate(req.params.email, parseInt(req.params.amount)).
    then((user) => {
        console.log(user)
        res.send(user)
    });
});

// all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

var port = 3000;
app.listen(process.env.PORT || port);
console.log('Running on port: ' + port);
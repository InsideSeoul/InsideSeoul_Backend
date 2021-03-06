var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var node_xj = require("xls-to-json");
var RandomString = require('randomstring')
var request = require("request")
var nodemailer = require('nodemailer')
var smtpPool = require('nodemailer-smtp-pool')
var logger = require('morgan')
var passport = require('passport')
var AppFacebookStrategy = require('passport-facebook-token')
var WebFacebookStrategy = require('passport-facebook').Strategy;
var crypto = require('crypto')
var app = express()
var PORT = process.env.PORT || 3000
var db = require('./database/mongo')

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(logger('dev'))
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({
    extended : false
}))

app.listen(PORT, (err)=>{
    if(err){
        console.log("Server Error!")
        throw err
    }
    else {
        console.log("Server Running At "+PORT+" Port!")
    }
})

app.get('/', (req, res)=>{
    res.send('InsideSeoul')
})

require('./data/DataSetting')(fs, db, node_xj)
require('./routes/auth')(app, db, RandomString, crypto, nodemailer, smtpPool)
require('./routes/AppFacebook')(app, db, passport, AppFacebookStrategy)
require('./routes/WebFacebook')(app, db, passport, WebFacebookStrategy)
require('./routes/search')(app, db)
require('./routes/list')(app, db)
require('./routes/road')(app, db, request, fs)
require('./routes/translate')(app, request)


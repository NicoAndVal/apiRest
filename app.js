const express = require('express')
const config = require('./config')
const multer = require('multer')
const upload = multer()
const app = express()
const router = require('./router');

app
    .set('port',process.env.PORT)
    .use(express.urlencoded({extended:false}))
    .use(express.json())
    .use(upload.array())
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
        next();
      })
    .use('/api',router)

module.exports = app
